import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen; 