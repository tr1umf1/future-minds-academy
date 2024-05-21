import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero"
import Missions from "../componentsabout/Missions";
import Servises from "../components/Servises"
import Work from "../componentsabout/Work";
import Team from "../componentsabout/Team";
import Located from "../componentsabout/Located";
import Footer from "../components/Footer"

export default function About() {
    return (
        <div className="App">
        <Nav
        active = "active"
        />
        <Hero
        title="The effective solutions for your business"
        subtitle="We are a team who creates marketing strategies for B2B and B2C companies"
        image="assets/images/header-img.png"
        />
        <Missions
        work="Our Mission"
        prof="Professional approach"
        image="assets/images/services-icon-1.svg"
        />
        <Work/>
        <Team/>
        <Located/>
        <Servises
        advertising="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia
        consequat duis enim velit mollit."
        marketing="Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur neque congue."
        web="Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis
        dictumst sit sed volutpat aliquet tortor non."
        email="Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non quam
        ultrices interdum vitae vestibulum."
        working="Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum
        orci habitasse eget malesuada platea."
        bussines="Massa donec quam orci feugiat. Quis iaculis facilisi ornare aenean lorem enim purus in
        lacus in ullamcorper diam consequat."
        />
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