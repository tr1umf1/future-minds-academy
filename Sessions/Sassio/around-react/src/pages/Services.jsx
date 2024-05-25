import React from "react";
import Nav from "../components/Nav";
import Ser from "../componentsServices/Ser";
import Solutions from "../componentsServices/Solutions";
import System from "../componentsServices/System";
import Data from "../componentsServices/Data";
import Costumers from "../components/Costumers";
import Arrows from "../components/Arrows";
import Info from "../components/Info";
import StartUp from "../componentsServices/StartUp";
import Footer from "../components/Footer";

export default function Servis() {
    return (
        <div className="wrapper-full service">
            <Nav
            class="header wrapper-xl row"
            />
            <Ser/>
            <div class="wrapper-lg solution-section">
                <Solutions/>
                <System/>
                <Data/>
                <br></br>
            <div class="divided"></div>
            </div>
            <div className="wrapper-md about-costumer">
            <Costumers/>
            <Arrows/>
            <Info
            class= "row metrics service"
            />
            </div>
            <StartUp/>
            <div class="wrapper-lg">
            <Footer/>
            </div>
        </div>
    )
}