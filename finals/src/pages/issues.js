import React from 'react';
import IssuesComponents from './issuesComponents';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import '../components/App.css';
import '../pages/App.css';
import './App.css';
import { useState } from 'react';
function Issues() {
  const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  return (
    <div className={`issues-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <IssuesComponents/>
        <Footer/>
        </div>
  )
}

export default Issues
