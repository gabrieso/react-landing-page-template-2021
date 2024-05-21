import React from 'react';

import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-background shadow-2xl rounded-lg border border-border transition-shadow duration-300 ease-in-out hover:shadow-3xl text-center">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Submission Successful!
      </h2>
      <p className="mb-6 text-tertiary text-center">
        Thank you for submitting your CV. We will review your information and
        get back to you soon.
      </p>
      <Link to="/" className="text-primary hover:underline">
        Go back to home page
      </Link>
    </div>
  );
}

export default Success;
