import React, { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, uploadString } from 'firebase/storage';

import { storage, db } from '../firebaseConfig';

function CVUploadForm() {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleFileChange = (event) => setFile(event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file || !email) {
      alert('Please enter your email and select a file to upload.');
      return;
    }

    // References to storage locations
    const fileRef = ref(storage, `cvs/${file.name}`);
    const emailRef = ref(
      storage,
      `emails/${email.replace(/[^a-zA-Z0-9]/g, '_')}.txt`
    ); // Create a safe filename from email

    try {
      // Upload the file to Firebase Storage
      const uploadFileResult = await uploadBytes(fileRef, file);
      console.log('File uploaded successfully', uploadFileResult);

      // Convert email string to Blob and upload as .txt file
      const emailBlob = new Blob([email], { type: 'text/plain' });
      const uploadEmailResult = await uploadBytes(emailRef, emailBlob);
      console.log('Email uploaded successfully', uploadEmailResult);
      alert('Your CV and email have been submitted successfully!');
      // Add the email and file reference to Firestore
      const docRef = await addDoc(collection(db, 'submissions'), {
        email,
        fileName: file.name,
        filePath: uploadFileResult.metadata.fullPath,
        emailPath: uploadEmailResult.metadata.fullPath,
      });
      console.log('Document written with ID: ', docRef.id);

      setEmail('');
      setFile(null);
      alert('Your CV and email have been submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting your CV and email.');
    }
  };

  return (
    <div
      className="max-w-2xl mx-auto my-16 p-8 bg-background shadow-2xl rounded-lg border border-border transition-shadow duration-300 ease-in-out hover:shadow-3xl"
      id="cvUploadForm"
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Submit Your CV
      </h2>
      <p className="mb-6 text-tertiary text-center">
        Upload your CV and provide your email address below. We will use
        advanced algorithms to analyze your qualifications and match you with
        industry-leading opportunities.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full px-4 py-2 border border-tertiary rounded-md shadow-sm placeholder-tertiary focus:outline-none focus:ring-primary focus:border-primary transition duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="cv"
            className="block text-sm font-medium text-secondary mb-2"
          >
            Upload CV
          </label>
          <input
            type="file"
            id="cv"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-2 border border-tertiary rounded-md shadow-sm text-gray-900 cursor-pointer focus:outline-none focus:ring-primary focus:border-primary transition duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary hover:bg-secondary text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CVUploadForm;

// import React, { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes } from 'firebase/storage';
// import { storage, db } from '../firebaseConfig';

// function CVUploadForm() {
//   const [email, setEmail] = useState('');
//   const [file, setFile] = useState<File | null>(null);

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setMessage('');
//     if (!file || !email) {
//       setMessage('Please enter your email and select a file to upload.');
//       return;
//     }

//     const fileRef = ref(storage, `cvs/${file.name}`);
//     try {
//       const uploadResult = await uploadBytes(fileRef, file);
//       console.log('File uploaded successfully', uploadResult);

//       // Add the email and file reference to Firestore
//       const docRef = await addDoc(collection(db, 'submissions'), {
//         email,
//         fileName: file.name,
//         filePath: uploadResult.metadata.fullPath,
//       });
//       setEmail('');
//       setFile(null);
//       setMessage('Your CV has been submitted successfully!');
//     } catch (error) {
//       console.error('Error adding document: ', error);
//       setMessage('Error submitting your CV.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} required />
//         </label>
//         <label>
//           Upload file:
//           <input type="file" onChange={handleFileChange} required />
//         </label>
//         <button type="submit">Submit CV</button>
//       </form>
//     </div>
//   );
// }

// export default CVUploadForm;
