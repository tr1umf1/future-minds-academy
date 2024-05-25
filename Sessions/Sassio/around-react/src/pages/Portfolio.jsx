import React from "react";
import Nav from "../components/Nav";
import Showcase from "../componentsPortfolio/ShowCase";
import Navigation from "../componentsPortfolio/Navigation";
import ServicesRow from "../componentsPortfolio/ServicesRow";
import StartUp from "../componentsServices/StartUp";
import Footer from "../components/Footer";

export default function Portfolio() {
    return (
        <div className="container-fixed">
            <Nav
            class="header row" 
            />
            <div className="wrapper-md">
                <Showcase/>
                <Navigation
                class="col navigation-protofolio"
                />
                <ServicesRow/>
                <StartUp/>
            </div>
           <Footer/>
        </div>
    )
}