import React, { Component } from 'react';
import './App.css';
import { Notfound } from './components/Notfound';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'components/Main/Main';
import { About } from 'components/About/About';

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    );
  }
}

export default App;
