import React from "react";

export default function Price() {
    return (
        <div>
            <div className="simple-pricing m-1 p-1">
                <div className="col-1 text-center">
                    <button className="speciale-1 plans">PLANS</button><br />
                    <h1 className="display-1">Simple Pricing</h1>
                </div>
                <div className="col text-center m-5">
                    <span className="modify">Modify</span>
                    <label className="switch-container mx-2">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <span>Annually Save 30%</span>
                </div><br />
                <div className="row gap-3">
                    <div className="col-4 basic">
                        <button className="pro-btn">Most Popular</button><br />
                        <div className="basic-info">
                            <p>Basic</p>
                            <h2>Free</h2>
                            <p className="mini">per month</p>
                            <br />
                        </div>
                        <p className="pricing-paragraph">Standard listing submission, active for <br /> 30 days</p>
                        <ul className="custom-list">
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">All Operating Supported</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Great Interface</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Allows encryption</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Face recognized system</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">24/7 Full support</span>
                            </li>
                        </ul>
                        <button className="basic-btn">GET STARTED</button><br />
                    </div>
                    <div className="col-4 professional">
                        <div className="basic-info">
                            <button className="pro-btn">Most Popular</button><br />
                            <p>Professional</p>
                            <h2>$599.95</h2>
                            <p className="mini">per month</p>
                            <br />
                        </div>
                        <p className="pricing-paragraph">Standard listing submission, active for <br /> 30 days</p>
                        <ul className="custom-list">
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">All Operating Supported</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Great Interface</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Allows encryption</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Face recognized system</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">24/7 Full support</span>
                            </li>
                        </ul>
                        <button className="basic-btn-pro">GET STARTED</button><br />
                    </div>
                    <div className="col-4 business">
                        <button className="pro-btn">Most Popular</button><br />
                        <div className="basic-info">
                            <p>Business</p>
                            <h2>$999.95</h2>
                            <p className="mini">per month</p>
                            <br />
                        </div>
                        <p className="pricing-paragraph">Standard listing submission, active for <br /> 30 days</p>
                        <ul className="custom-list">
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">All Operating Supported</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Great Interface</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Allows encryption</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">Face recognized system</span>
                            </li>
                            <li>
                                <div className="icon-container-custom done">
                                    <span className="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span className="text">24/7 Full support</span>
                            </li>
                        </ul>
                        <button className="basic-btn text-left">GET STARTED</button><br />
                    </div>
                </div>
            </div>
        </div>
    );
}
