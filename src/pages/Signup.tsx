import React, {useState} from 'react';
import Button from '../components/Button';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSignupInfo({...signupInfo, username: e.target.value});
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSignupInfo({...signupInfo, email: e.target.value});
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSignupInfo({...signupInfo, password: e.target.value});
  };

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('You are signed up');
  };
  
  return (
    <div>
      <div className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form
            onSubmit={registerUser}
            action='https://formbold.com/s/FORM_ID'
            method='POST'
          >
            <div className='mb-5'>
              <label
                htmlFor='name'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Username
              </label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={handleUsernameChange}
                required
                placeholder='unique_username'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='email'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleEmailChange}
                required
                placeholder='example@domain.com'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='subject'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Password
              </label>
              <input
                type='password'
                name='subject'
                id='subject'
                onChange={handlePasswordChange}
                required
                placeholder='Create a password'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div>
              <Button label='Register' type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
