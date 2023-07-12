import React from 'react';
import ReferenceComponents from './referenceComponents';
import Navbar from '../components/navbar';
import '../components/App.css';
import './App.css';
import Footer from '../components/Footer';
import { useState } from 'react';

function Reference() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    return (
        <div className={` ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <ReferenceComponents />
            <Footer/>

        </div>
    )
}

export default Reference