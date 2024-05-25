import React from "react";

export default function Message() {
    return (
        <div>
            <div className="contact-form">
                    <div className="text-contact text-center">
                        <button className="speciale contact-us">Message</button>
                        <h1 className="dark">Tell us about yourself</h1>
                    </div>
                    <div className="container">
                        <form action="#">
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="fullName">Full Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="email">Your Email Address</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="subject">Your Subject</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data textarea">
                                    <textarea rows="20" cols="180" required></textarea>
                                    <br />
                                    <div className="underline"></div>
                                    <label htmlFor="message">Message</label>
                                    <br />
                                </div>
                            </div>
                            <div className="bottom-part">
                                <div className="input-check">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms">I am bound by the terms of the Service. I accept the Privacy Policy.</label>
                                </div>
                                <button className="pro-btn contact-us">Send your message</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}
