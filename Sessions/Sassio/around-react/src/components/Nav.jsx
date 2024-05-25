/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Nav(props) {
    return (
        <div>
            <header className={props.class} id="top">
         <div className="col logo-col">
            <img src="assets/images/logo.png" alt="Your Image" />
         </div>
         <button className="btn-white duplicate">Join</button>
         <div className="hamburger" tabIndex="0">
            <span className="material-symbols-outlined">menu</span>
            <div className="notification-down">
               <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li className="button"><a href="index.html">Get the App</a></li>
              </ul>              
            </div>
         </div>
         <div className="col navigation-col">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact Us</a>
            <a href="/blog">Blog</a>
         </div>
         <div className="col btn-primary">
            <button className="btn-white">Join</button>
            <button className="btn-black">Get the App</button>
         </div>
      </header>
        </div>
    )
}