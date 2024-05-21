import React, { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

import { storage, db } from '../firebaseConfig';

function CVUploadForm() {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [interests, setInterests] = useState('');
  const [bundle, setBundle] = useState('');
  const [submitted, setSubmitted] = useState(false); // Add a state variable for submission status

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleFileChange = (event) => setFile(event.target.files[0]);
  const handleConsentChange = (event) => setConsent(event.target.checked);
  const handleInterestsChange = (event) => setInterests(event.target.value);
  const handleBundleChange = (event) => setBundle(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file || !email || !bundle) {
      alert(
        'Please enter your email, select a file to upload, and choose a bundle.'
      );
      return;
    }

    // References to storage locations
    const fileRef = ref(storage, `cvs/${file.name}`);
    const dataRef = ref(
      storage,
      `data/${email.replace(/[^a-zA-Z0-9]/g, '_')}_data.txt`
    ); // Create a safe filename from email

    try {
      // Upload the file to Firebase Storage
      const uploadFileResult = await uploadBytes(fileRef, file);
      console.log('File uploaded successfully', uploadFileResult);

      // Create a text file with email, interests, and bundle
      const dataContent = `Email: ${email}\nInterests: ${interests}\nBundle: ${bundle}`;
      const dataBlob = new Blob([dataContent], { type: 'text/plain' });
      const uploadDataResult = await uploadBytes(dataRef, dataBlob);
      console.log('Data uploaded successfully', uploadDataResult);

      // Add the email, file reference, and data reference to Firestore
      const docRef = await addDoc(collection(db, 'submissions'), {
        email,
        fileName: file.name,
        filePath: uploadFileResult.metadata.fullPath,
        dataPath: uploadDataResult.metadata.fullPath,
      });
      console.log('Document written with ID: ', docRef.id);

      setEmail('');
      setFile(null);
      setInterests('');
      setBundle('');
      setConsent(false);

      setSubmitted(true); // Set the submission status to true
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting your CV and data.');
    }
  };

  if (submitted) {
    // Conditionally render success message if submitted is true
    return (
      <div className="max-w-2xl mx-auto my-16 p-8 bg-background shadow-2xl rounded-lg border border-border transition-shadow duration-300 ease-in-out hover:shadow-3xl text-center">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Submission Successful!
        </h2>
        <p className="mb-6 text-tertiary text-center">
          Thank you for submitting your CV. We will review your information and
          get back to you soon.
        </p>
      </div>
    );
  }

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
        <div>
          <label
            htmlFor="interests"
            className="block text-sm font-medium text-secondary mb-2"
          >
            What subjects or topics from your academic studies are you most
            interested in, and would like to further explore in your
            professional career? (Please feel free to elaborate in your
            response.)
          </label>
          <textarea
            id="interests"
            value={interests}
            onChange={handleInterestsChange}
            required
            className="w-full px-4 py-2 border border-tertiary rounded-md shadow-sm placeholder-tertiary focus:outline-none focus:ring-primary focus:border-primary transition duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="bundle"
            className="block text-sm font-medium text-secondary mb-2"
          >
            Choose a bundle
          </label>
          <select
            id="bundle"
            value={bundle}
            onChange={handleBundleChange}
            required
            className="w-full px-4 py-2 border border-tertiary rounded-md shadow-sm placeholder-tertiary focus:outline-none focus:ring-primary focus:border-primary transition duration-300"
          >
            <option value="">Select a bundle</option>
            <option value="1">Foundation Pathaway</option>
            <option value="2">Enhancement Track</option>
            <option value="3">Pinnacle Program</option>
            <option value="4">Customized Bundle</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={handleConsentChange}
            className="mr-2"
          />
          <label
            htmlFor="consent"
            className="text-sm font-medium text-secondary"
          >
            I&apos;m willing to give my CV for analysis. This will only be
            shared with potential matching companies.
          </label>
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
