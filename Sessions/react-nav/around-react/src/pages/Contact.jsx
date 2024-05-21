import React from "react";
import Nav from "../components/Nav";
import Getin from "../componentscontact/Getin";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
        <Nav
        active = "active"
        /> 
        <Getin/>
        <Footer/>
        </div>
    )
}