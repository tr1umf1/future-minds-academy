import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Spring() {
    return (
        <div>
            <Nav />
            <Hero
            caption="This is spring"
            image="assets/images/spring.png"
            />
            <Footer/>
        </div>
    )
}