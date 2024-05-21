import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="mt-10 p-8 bg-gray-100 shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-3xl font-bold text-center text-primary my-4">
        Couldn&apos;t find a bundle that suits you? Let us know!
      </h2>
      <div className="flex justify-center">
        <iframe
          src="https://forms.gle/mYYU3L15kbFqQo1x7"
          width="640"
          height="480"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FeedbackForm;
