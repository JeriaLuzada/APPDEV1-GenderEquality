import React from 'react';
import './App.css';
import Img from './keyissues.jpg'
function keyissues() {
    return (
        <div>
            <div className='key-container'>
                <img className='key-img' src={Img} />
                <div className='key-center'>
                    <div className='key-text'>
                        <strong>Key Issues</strong>
                        <p>Gender equality is a fundamental human right, but women face challenges like limited economic participation, unequal access to education, health and safety risks, and under representation in politics.  Promoting gender equality is crucial for international development goals, empowering women and girls,  and addressing health and safety concerns</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default keyissues
