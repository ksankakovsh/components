import React, { Component } from 'react';
import './App.css';
import { Notfound } from './pages/Notfound';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'pages/Main/Main';
import { About } from 'pages/About/About';
import { Form } from 'pages/Form/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
