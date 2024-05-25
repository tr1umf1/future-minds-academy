import React from "react";
import Nav from "../components/Nav";
import ContactUs from "../componentscontact/ContactUs";
import Location from "../componentscontact/Location";
import Message from "../componentscontact/Message";
import Map from "../componentscontact/Map";
import Support from "../componentscontact/Support";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="container-fixed wrapper-full  contact-page">
             <Nav
            class="header wrapper-lg row contact"
            />
            <ContactUs/>
            <div className="contact wrapper-md">
                <Location/>
                <Message/>
                <Map/>
                <Support/>
                <Footer/>
            </div>
          
        </div>
    )
}