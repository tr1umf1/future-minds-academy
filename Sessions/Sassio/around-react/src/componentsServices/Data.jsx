/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Data() {
    return (
        <div>
            <div class="row create-service">
                <h1>Services</h1>
                <a href="">
                    <p class="info-service">Start your project</p>
                </a>
            </div>
            <div className="row">
                <div className="carousel">
                    <input type="radio" name="slide" id="slide1" checked />
                    <input type="radio" name="slide" id="slide2" />
                    <input type="radio" name="slide" id="slide3" />
                    <input type="radio" name="slide" id="slide4" />
                    <label htmlFor="slide1" className="arrow prev">&#10094;</label>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="assets/images/first.png" alt="" />
                            <div className="carousel-text">
                                <h1>Mobile Data</h1>
                                <p>Achieve virtually any design and layout from within the one template.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/first.png" alt="" />
                            <div className="carousel-text">
                                <h1>Financial Advisory</h1>
                                <p>Achieve virtually any design and layout from within the one template.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/first.png" alt="" />
                            <div className="carousel-text">
                                <h1>Business Contracts</h1>
                                <p>Achieve virtually any design and layout from within the one template.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/first.png" alt="" />
                            <div className="carousel-text">
                                <h1>Integration Dynamics</h1>
                                <p>Achieve virtually any design and layout from within the one template.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/first.png" alt="" />
                            <div className="carousel-text">
                                <h1>Business Contracts</h1>
                                <p>Achieve virtually any design and layout from within the one template.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/first.png" alt="" />
                            <div className="carousel-text">
                                <h1>Financial Advisory</h1>
                                <p>Achieve virtually any design and layout from within the one template.</p>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="slide4" className="arrow next">&#10095;</label>
                    <label htmlFor="slide1" className="arrow prev">&#10094;</label>
                </div>
            </div>
        </div>
    );
}
