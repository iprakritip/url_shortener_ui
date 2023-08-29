import React from 'react';
import Button from '../components/Button';

const Auth = () => {
  return (
    <div className='h-screen w-screen bg-slate-100 '>
        <h4 className='text-center py-4 font-semibold text-xl text-blue-800 bg-gray-400'>Welcome to URL Shortener</h4>
      <div className='flex gap-4 justify-center items-center w-full h-[90%]'>
        <Button label='Login' />
        <Button label='Sign Up' />
      </div>
    </div>
  );
};

export default Auth;
