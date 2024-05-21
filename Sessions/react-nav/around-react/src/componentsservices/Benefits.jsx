import React from "react";

export default function Benefits() {
    return (
        <div className="container-fixed container-res gap-4">
            <div className="row gap-6">
                <div className="col">
                    <div className="benefits-img">
                        <img src="assets/images/Services-working-with-us.png" alt="Client" />
                    </div>
                </div>
                <div className="col">
                    <div className="card-benefits-container">
                        <h1 className="card-benefits-title">Benefits <br /> of working with us</h1>
                        <div className="card-benefits p-2">
                            <div className="processBenefits-number p-1">01</div>
                            <div>
                                <h2>Individual approach</h2>
                                <span>Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis
                                    dictumst sit sed volutpat aliquet tortor non.</span>
                            </div>
                        </div>
                        <div className="card-benefits p-2">
                            <div className="processBenefits-number p-1">02</div>
                            <div>
                                <h2>Integrated analytics</h2>
                                <span>Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat
                                    nulla pariatur neque congue aliqua dolor do leo proin odio est sed sit felis facilisi
                                    integer</span>
                            </div>
                        </div>
                        <div className="card-benefits p-2">
                            <div className="processBenefits-number p-1">03</div>
                            <div>
                                <h2>Step by step work</h2>
                                <span>More erat leo proin odio est sed sit felis facilisi integer sed congue neque
                                    turpis
                                    dictumst sit sed volutpat aliquet tortor non</span>
                            </div>
                        </div>
                        <div className="card-benefits p-2">
                            <div className="processBenefits-number p-1">04</div>
                            <div>
                                <h2>Full spectrum of services</h2>
                                <span>Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non
                                    quam
                                    ultrices interdum vitae vestibulum. Hac erat leo proin odio est sed sit felis
                                    facilisi
                                    integer sed.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
