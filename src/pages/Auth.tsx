import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';

const Auth = () => {
  return (
    // <div className='h-screen w-screen bg-slate-100 '>
    //     <h4 className='text-center py-4 font-semibold text-xl text-blue-800 bg-gray-400'>Welcome to URL Shortener</h4>
    //   <div className='flex gap-4 justify-center items-center w-full h-[90%]'>
    //     <Link to='/login'>
    //     <Button label='Login' />
    //     </Link>
    //     <Link to="/signup">
    //     <Button label='Sign Up' />
    //     </Link>
    //   </div>
    // </div>

    <div className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
      <div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
        <div className='relative'>
          <h4 className='text-center py-4 font-semibold text-3xl text-indigo-700 '>
            Welcome to URL Shortener
          </h4>
          <div className='flex gap-4 justify-center items-center w-full h-[90%]'>
            <Link to='/login'>
              <Button label='Login' />
            </Link>
            <Link to='/signup'>
              <Button label='Sign Up' />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src='https://i.ibb.co/ck1SGFJ/Group.png' alt='rocket' />
      </div>
    </div>
  );
};

export default Auth;
