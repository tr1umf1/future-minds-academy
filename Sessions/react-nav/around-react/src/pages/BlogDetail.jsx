import React from "react";
import Nav from "../components/Nav";
import Inspirate from "../componentsblogdetail/Inspirate";
import Image from "../componentsblogdetail/Image";
import Description from "../componentsblogdetail/Description";
import Footer from "../components/Footer";
import Related from "../componentsblogdetail/Related";

export default function BlogDetail() {
    return (
        <div>
        <Nav
        active = "active"
        />
        <Inspirate/>
        <Image/>
        <Description/>
        <Related/>
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