import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LPage from './pages/landingpage';
import ContactPages from './pages/contactpage';
import SUPage from './pages/signUpPage';
import SIPage from './pages/signInPage';
import AUPage from './pages/aboutUsPages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LPage/>} />
        <Route path="/about" element={<AUPage/>} />
        <Route path="/contact" element={<ContactPages/>} />
        <Route path="/signup" element={<SUPage/>} />
        <Route path="/signin" element={<SIPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
