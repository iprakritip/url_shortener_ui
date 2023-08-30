import React, {useState} from 'react';
import Button from '../components/Button';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setLoginInfo({...loginInfo, username: e.target.value});
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('pwd',e.target.value);
    setLoginInfo({...loginInfo, username: e.target.value});
  };
  const loginUser=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('You are now logged in.');
    
}
  return (
    <div>
      <div className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form onSubmit={loginUser} action='https://formbold.com/s/FORM_ID' method='POST'>
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
                onChange={handleUsernameChange}
                id='name'
                required
                placeholder='your_username'
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
                placeholder='Enter your password'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>

            <div>
              <Button label='Log In' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
