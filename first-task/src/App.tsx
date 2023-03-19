import React from 'react';
import './App.css';
import { Notfound } from './components/Notfound';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'components/Main/Main';
import { About } from 'components/About/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
