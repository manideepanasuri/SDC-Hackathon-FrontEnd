import React, { useContext, useState } from 'react';
import { Navbar } from './Navbar';
import UserContext from '../context/usercontext/Usercontext';

const ProfilePage = () => {
  const {auth,user}=useContext(UserContext);


  

  return (
    <>
    
    <Navbar/>
    {user&&
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100" data-theme='dark'>
      <div className="card w-96 bg-white shadow-lg p-6 rounded-lg">
        <img
          src={user.photo}
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold text-center">{user.name}</h2>
        <p className="text-gray-500 text-center">Email: {user.email}</p>
      </div>

    </div>}
    </>
  );
};

export default ProfilePage;
