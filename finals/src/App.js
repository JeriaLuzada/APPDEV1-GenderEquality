import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './pages/header'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
