import React, { Component } from 'react'
import { FaGoogle, FaFacebookF, FaGithub, FaTwitter, FaInstagram, FaReact, FaBootstrap } from "react-icons/fa";
export default class extends Component {
    render() {
        return (
            <div className="">
                <br />
                <footer className='footer'>
                    <br />
                    <div className="container text-center text-md-start mt-4">
                        <hr className='hr-footer' />
                        <div className="row mt-2">
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <p className="text-uppercase mt-3">
                                    Home
                                </p>
                                <p className="text-uppercase">
                                    About
                                </p>
                                <p className="text-uppercase">
                                    News
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
                                    <a href="/references" className="text-reset">References</a>
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
                    <div class="container p-4 pb-0">
                        <button type="button" class="btn btn-outline-light btn-floating m-1" href="#">
                            <FaTwitter />
                        </button>
                        <button type="button" class="btn btn-outline-light btn-floating m-1" href="#">
                            <FaGithub />
                        </button>
                        <button type="button" class="btn btn-outline-light btn-floating m-1" href="#">
                            <FaFacebookF />
                        </button>
                        <button type="button" class="btn btn-outline-light btn-floating m-1" href="#">
                            <FaGoogle />
                        </button>
                        <button type="button" class="btn btn-outline-light btn-floating m-1" href="#">
                            <FaInstagram />
                        </button>
                        <button type="button" class="btn btn-outline-light btn-floating m-1" href="#">
                            <FaReact />
                        </button>
                        <button type="button" class="btn btn-outline-light btn-floating m-1" href="#">
                            <FaBootstrap />
                        </button>
                    </div>
                    <div className="text-center p-2 fw-bold">
                        COPYRIGHT@2023 
                        <a className="text-reset fw-bold" style={{textDecoration: 'none'}}> | APPDEV1 Final Project - Group 2(Gender Equality)</a>
                    </div>
                </footer>
            </div>

        )
    }
}