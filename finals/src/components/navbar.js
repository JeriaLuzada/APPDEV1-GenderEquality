import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <a className="navbar-brand navbar-genderEquality" href="#">GENDER EQUALITY</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse button-panel" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-0 mb-auto mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active home" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown ms-4">
                    <a className="nav-link dropdown-toggle about" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#key_issues">Key Issues</a></li>
                         <li><a class="dropdown-item" href="/law">Laws and Policies</a></li>
                        <li><a class="dropdown-item" href="#">Refference</a></li>
                    </ul>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link news" href="#news">News</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link contact" href="#">Contact</a>
                    </li>
                
                    <div className="search-container ms-4">
                        <input className="form-control search-input" type="search" placeholder="Search"/>
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    </div>
                    
                    <button className='sun-svg ms-4'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/> </svg>
                    </button>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
