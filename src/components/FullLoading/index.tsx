import React from 'react';

interface FullLoadingProps {
  isLoading: boolean;
}

const FullLoading: React.FC<FullLoadingProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <div className="flex items-center justify-center h-screen">
        <div className="loading loading-spinner loading-lg text-blue-500"></div>
      </div>
    </div>
  );
};

export default FullLoading;
