import React from "react";

export default function Benefit() {
    return (
        <div>
            <div className="benefit-section">
                <div className="row">
                    <div className="col-1 m-2 p-2 replacement">
                        <img src="assets/images/benefit.png" alt="benefits" />
                    </div>
                    <div className="col-1 m-3 p-3 benefit-info">
                        <div className="col benefit-header text-left ">
                            <button className="btn-primary speciale-1">SAFETY FIRST</button>
                            <h3 className="display-1">Tons of benefit</h3>
                        </div>
                        <div className="benefits">
                            <ul>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">Development</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">Web Design</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">Do Magic</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">Save Time</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="item-left">
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">App builder</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">Dashboard</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">Feedback</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button className="btn-free just-start">FREE TRIAL</button>
                    </div>
                    <div className="col-1 m-2 p-2 benefit-img">
                        <img src="assets/images/benefit.png" alt="benefits" className="benefit-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
