/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React from "react";

export default function NavBlog() {
    return(
        <div>
            <div className="header blog row" id="top"
                style={{ backgroundImage: "url('assets/images/background.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="col logo-col">
                    <img src="assets/images/blog-logo.png" alt="Your Image" />
                </div>
                <button className="btn-white duplicate blog">Join</button>
                <div className="hamburger-blog" tabIndex="0">
                    <span className="material-symbols-outlined">menu</span>
                    <div className="notification-down-blog">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li className="button"><a href="index.html">Get the App</a></li>
                        </ul>                    
                    </div>
                </div>
                <div className="col navigation-col blog">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="col btn-primary blog">
                    <button className="btn-white blog">Join</button>
                    <button className="btn-black blog">Get the App</button>
                </div>
                <div className="row header-text blog">
                    <div className="col-6">
                        <h1>Blog Styles</h1>
                    </div>
                    <div className="col-6">
                        <p>With we want to optimize the customization process so your team can save time when building
                            websites.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
