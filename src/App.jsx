import React from 'react';
import Signup from './Signup';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Login2 from './Login2';
import PasswrodReset from './PasswrodReset';


function App() {
  return (
    <div>
      <Routes >
      <Route index element={<Signup />}></Route>
      <Route path='/login' element={<Login2 />}></Route>
      <Route path='/passwordreset' element={<PasswrodReset />}></Route>
      </Routes>
    </div>
  )
}

export default App;
