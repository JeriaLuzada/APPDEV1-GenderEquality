import React from 'react'
import IssuesComponents from './issuesComponents'
import Navbar from '../components/navbar'
import Footer from '../components/Footer';
import '../components/App.css';
import '../pages/App.css';
import './App.css';
function issues() {
  return (
    <div>
        <Navbar />
        <IssuesComponents/>
        <Footer/>
        </div>
  )
}

export default issues
