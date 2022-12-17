import React from 'react';
import ReactLoading from 'react-loading';

const LoadingComponent = ({ type, color }) => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900'>
      <ReactLoading type={type} color={color} height={80} width={150} />
    </div>
  );
};

export default LoadingComponent;
