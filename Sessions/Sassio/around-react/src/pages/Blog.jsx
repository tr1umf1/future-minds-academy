import React from "react";
import NavBlog from "../componentsBlog/NavBlog";
import Navigation from "../componentsPortfolio/Navigation";
import Web from "../componentsBlog/Web";
import Footer from "../components/Footer";


export default function Blog() {
    return(
        <div className="container-ful">
            <NavBlog/>
            <div className="wrapper-lg bloog blog-intro">
            <Navigation
            class="col navigation-blog"
            />
            <Web/>
            <Footer/>
            </div>
         
        </div>
    )
}