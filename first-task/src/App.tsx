import React from 'react';
import './App.css';
import { Notfound } from './components/Notfound';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'components/Main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
