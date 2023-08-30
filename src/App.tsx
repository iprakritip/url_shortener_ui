import React from 'react';
import Auth from './pages/Auth';
import {Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
