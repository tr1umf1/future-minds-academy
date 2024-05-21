import React from "react";
import Nav from "../components/Nav";
import Grid from "../componentsblog/Grid";
import Footer from "../components/Footer";

export default function Blog() {
    return (
        <div>
        <Nav
        active = "active"
        />
        <Grid/>
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
    )
}