import React from 'react';

export { Page }

function Page({ is404 }: { is404?: boolean }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{is404 ? '404' : 'Error'}</h1>
        <p className="text-xl text-gray-600 mb-4">
          {is404 ? 'Page not found' : 'Something went wrong'}
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
}