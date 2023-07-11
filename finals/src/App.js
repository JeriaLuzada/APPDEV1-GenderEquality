import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './pages/header'
import KeyIssues from './pages/keyissues';
import News from './pages/news';
import Footer from './components/Footer';
import Help from './pages/help';
import Law from './pages/law';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className="App">
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`} >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Header/>
        <KeyIssues/>
        <Law />
        <Help/>
        <hr/>
        <News />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
