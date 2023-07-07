import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './pages/header'
import KeyIssues from './pages/keyissues';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <KeyIssues/>
    </div>
  );
}

export default App;
