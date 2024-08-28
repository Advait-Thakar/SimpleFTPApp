// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Login from '../components/Login'; // Ensure this path is correct
import { Home } from '../components/Home';
import { Profile } from '../components/Profile';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/sign-in' element={<Login />} />
      <Route path='/home' element={<Home />}>
      </Route>
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};
