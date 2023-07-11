import React from 'react';
import ReferenceComponents from './referenceComponents';
import Navbar from '../components/navbar';
import '../components/App.css';
import './App.css';
import Footer from '../components/Footer';

function reference() {
    return (
        <div>
            <Navbar />
            <ReferenceComponents />
            <Footer/>

        </div>
    )
}

export default reference