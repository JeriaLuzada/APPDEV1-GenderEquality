import React from 'react'
import IssuesComponents from './issuesComponents'
import Navbar from '../components/navbar'
import '../components/App.css';
import './App.css';
function issues() {
  return (
    <div>
        <Navbar />
        <IssuesComponents/>
        </div>
  )
}

export default issues
