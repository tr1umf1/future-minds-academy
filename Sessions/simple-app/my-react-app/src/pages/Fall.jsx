import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Spring() {
    return (
        <div>
            <Nav />
            <Hero
            caption="Welcome to Fall"
            image="assets/images/fall.png"
            />
            <Footer/>
        </div>
    )
}