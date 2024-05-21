import React from "react";
import Nav from "../components/Nav";
import Homepage from "../componentsportofolio/Homepage";
import Footer from "../components/Footer"

export default function Portfolio() {
    return (
        <div className="App">
        <Nav
        active = "active"
        />
        <Homepage/>
        <Footer
        services="services"
        industries="industries"
        reviews="reviews"
        studies="studies"
        policy="Privacy policy"
        center="Help Center"
        insta="Instagram"
        fb="Facebook"
        linkedin="linkedin"
        />
      </div>
    );
}