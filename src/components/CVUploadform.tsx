import React, { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

import { storage, db } from '../firebaseConfig';

function CVUploadForm() {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);

  // const handleEmailChange = (event) => setEmail(event.target.value);
  // const handleFileChange = (event) => setFile(event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file || !email) {
      alert('Please enter your email and select a file to upload.');
      return;
    }

    const fileRef = ref(storage, `cvs/${file.name}`);
    const emailRef = ref(storage, `emails/${email}`);
    try {
      // Upload the file to Firebase Storage
      const uploadResult = await uploadBytes(fileRef, file);
      console.log('File uploaded successfully', uploadResult);

      // Add the email and file reference to Firestore
      const docRef = await addDoc(collection(db, 'submissions'), {
        email,
        fileName: file.name,
        filePath: uploadResult.metadata.fullPath,
      });
      console.log('Document written with ID: ', docRef.id);

      setEmail('');
      setFile(null);
      alert('Your CV has been submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting your CV.');
    }
  };

  return (
    <div
      className="max-w-lg mx-auto p-8 bg-white shadow rounded-lg"
      id="cvUploadForm"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your CV</h2>
      <p className="mb-4 text-gray-700">
        Upload your CV and provide your email address below. We will use
        advanced algorithms to analyze your qualifications and match you with
        industry-leading opportunities. This process helps tailor job placements
        that align with your skills and career aspirations.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload CV:
            <input
              type="file"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
