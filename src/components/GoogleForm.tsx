import React from 'react';

const FeedbackForm = () => {
  return (
    <div
      className="mt-10 p-8 bg-gray-100 shadow-lg rounded-lg border border-gray-300"
      id="form"
    >
      <h2 className="text-3xl font-bold text-center text-primary my-4">
        Tell us your needs!!
      </h2>
      <div className="flex justify-center">
        <iframe
          src="https://forms.gle/mYYU3L15kbFqQo1x7"
          className="w-full h-[80vh] border-0"
          title="Feedback Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FeedbackForm;
