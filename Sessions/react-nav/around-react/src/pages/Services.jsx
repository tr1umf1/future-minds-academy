import React from "react";
import Nav from "../components/Nav";
import Benefits from "../componentsservices/Benefits";
import Servises from "../components/Servises"
import Testimonials from "../components/Testimonials"
import Bussines from "../components/Bussines"
import Footer from "../components/Footer"

export default function Services() {
    return (
        <div className="App">
        <Nav
        active = "active"
        />
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
        <Benefits/>
        <Testimonials
        assistant="Jane Cooper"
        president="Wade Warren"
        ceo="Esther Howard"
        coordinator="Cameron Williamson"
        ceoo="Leslie Alexander"
        designer="Brooklyn Simmons"
        />
         <Bussines
        desc="Massa velitienes semper faucibus tristique id nibh elementum, id eu
        aliquamd diam mi
        tempus at
        laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit laoreet"
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
    );
}