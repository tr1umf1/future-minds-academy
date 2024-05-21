import React from "react";

export default function Missions(props) {
    return (
        <div className="container-fixed gap-7 container-res">
            <div className="row-direction gap-3">
                <div className="col">
                    <div className="card-header">
                        <span className="section-subtitle">{props.work}</span>
                        <h1 className="section-title">{props.prof}</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="services-container">
                        <div className="services">
                            <div className="service-card">
                                <div className="icon">
                                    <img src={props.image} alt="Icon" />
                                </div>
                                <h3>Advertising communications</h3>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia
                                    consequat duis enim velit mollit.
                                </p>
                            </div>
                        </div>
                        <div className="services">
                            <div className="service-card">
                                <div className="icon">
                                    <img src="assets/images/services-icon-2.svg" alt="Icon" />
                                </div>
                                <h3>Marketing and branding</h3>
                                <p>
                                    Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur neque congue.
                                </p>
                            </div>
                        </div>
                        <div className="services">
                            <div className="service-card">
                                <div className="icon">
                                    <img src="assets/images/services-icon-3.svg" alt="Icon" />
                                </div>
                                <h3>Marketing and branding</h3>
                                <p>
                                    Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur neque congue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
