import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LPage from './pages/landingpage';
import CPage from './pages/contactpage';
import AUPage from './aboutUsPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AUPage/>} />
        <Route path="/contact" element={<CPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
