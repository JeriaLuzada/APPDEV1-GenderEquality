import React from 'react'
import MemberComponents from './memberComponents';
import ContactComponents from './contactComponents';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import '../components/App.css';
import '../pages/App.css';
import './App.css';

function contact() {
  return (
    <div className='issues-container'>
        <Navbar />
        <MemberComponents/>
        <ContactComponents/>
        <Footer/>
        </div>
  )
}

export default contact
