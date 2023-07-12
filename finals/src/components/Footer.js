import React, { Component } from 'react'
import { FaGoogle, FaFacebookF, FaGithub, FaTwitter, FaInstagram, FaReact, FaBootstrap } from "react-icons/fa";
export default class extends Component {
    render() {
        return (
            <div className="footer-container" style={{ paddingTop: '20px' }}>
                <footer>
                    <div className="container text-center text-md-start mt-4">
                        <hr className='hr-footer' />
                        <div className="row mt-2">
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <p className="text-uppercase mt-3">
                                    <a className="text-uppercase" href="/">
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a className="text-uppercase" href="/contact">
                                        About us
                                    </a>
                                </p>
                                <p className="text-uppercase">
                                <a className="text-uppercase" href='https://news.un.org/en/' target='_blank'>
                                        News
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <p className="text-uppercase mt-3">
                                    Contact: 09123456789
                                </p>
                                <p className="text-uppercase">
                                    Email: sit@e.ubaguio.edu
                                </p>
                                <p>
                                    <a href="/reference" className="text-reset">References</a>
                                </p>
                            </div>
                            <div className="col-md-5 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-3">
                                    Group Members
                                </h6>
                                <p className="text-uppercase mt-3">
                                    BRYLLE JOHN BARTOLOME
                                </p>
                                <p className="text-uppercase">
                                    MARCIAL CABAY
                                </p>
                                <p className="text-uppercase">
                                    VALLEREE JOSEPH
                                </p>
                                <p className="text-uppercase">
                                    JERIA LUZADA
                                </p>
                                <p className="text-uppercase">
                                    PHILIP KHAIZER PAKIAS
                                </p>
                            </div>
                            <hr className='hr-footer' />
                        </div>
                    </div>
                    <div class="container p-4 pb-0 text-center" >
                        <a className="btn btn-floating m-1" href="https://twitter.com/i/flow/login?redirect_after_login=%2F" target="_blank" style={{ border: 'none', color: '#1DA1F2' }}>
                            <FaTwitter />
                        </a>
                        <a className="btn btn-floating m-1" href="https://github.com/JeriaLuzada/APPDEV1-GenderEquality" target="_blank" style={{ border: 'none' }}>
                            <FaGithub />
                        </a>
                        <a className="btn btn-floating m-1" href="https://www.facebook.com/login/" target="_blank" style={{ border: 'none', color: '#4267B2' }}>
                            <FaFacebookF />
                        </a>
                        <a className="btn btn-floating m-1" href="https://www.google.com/?safe=active&ssui=on" target="_blank" style={{ border: 'none', color: '#4285F4' }}>
                            <FaGoogle />
                        </a>
                        <a className="btn btn-floating m-1" href="https://www.instagram.com/" target='_blank' style={{ border: 'none', color: '#C13584' }}>
                            <FaInstagram />
                        </a>
                        <a className="btn btn-floating m-1" href="https://react.dev/" target='_blank' style={{ border: 'none', color: '#34cdeb' }}>
                            <FaReact />
                        </a>
                        <a className="btn btn-link btn-floating m-1" href="https://getbootstrap.com/" target='_blank' style={{ border: 'none', color: '#8334eb' }}>
                            <FaBootstrap />
                        </a>
                    </div>
                    <div className="text-center p-2 fw-bold">
                        COPYRIGHT@2023
                        <a className="text-reset fw-bold" style={{ textDecoration: 'none' }}> | APPDEV1 Final Project - Group 2(Gender Equality)</a>
                    </div>
                </footer>
            </div>

        )
    }
}
