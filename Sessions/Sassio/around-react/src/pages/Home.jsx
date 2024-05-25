import React from "react";



import Nav from "../components/Nav";
import Sale from "../components/Sale";
import Trusted from "../components/Trusted";
import Secure from "../components/Secure";
import Benefit from "../components/Benefit";
import Success from "../components/Succses";
import Features from "../components/Features";
import Costumers from "../components/Costumers";
import Arrows from "../components/Arrows";
import Info from "../components/Info";
import Screenshot from "../components/Screenshot";
import Price from "../components/Price";
import Questions from "../components/Questions";
import Download from "../components/Download";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="container-fixed" >
            <Nav
            class="header row"
            />
            <Sale/>
            <Trusted/>
            <Secure/>
            <Benefit/>
            <Success/>
            <Features/>
            <Costumers/>
            <Arrows/>
            <Info
            class = "row metrics"
            />
            <Screenshot/>
            <Price/>
            <Questions/>
            <Download/>
            <Footer/>
        </div>
    )
}