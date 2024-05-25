import React from "react";
import Nav from "../components/Nav";
import AboutUs from "../componentsAbout/AboutUS";
import Company from "../componentsAbout/Company";
import Info from "../components/Info";
import Develop from "../componentsAbout/Develop";
import Costumers from "../components/Costumers";
import Arrows from "../components/Arrows";
import Team from "../componentsAbout/Team";
import Partners from "../componentsAbout/Partners";
import Footer from "../components/Footer";


export default function About() {
    return (
        <div className="container-fluid wrapper-full about">
            <Nav
            class="header wrapper-xl row"
            />
            <AboutUs/>
            <Company/>
            <div  className="wrapper-md metrics-section about">
            <Info
            class= "row metrics m-3"
            />
            </div>
            <Develop/>
            <div className="wrapper-md about-costumer">
            <Costumers/>
            <Arrows/>
            </div>
            <Team/>
            <Partners/>
            <div class="wrapper-lg">
            <Footer/>
            </div>
        </div>
    )
}