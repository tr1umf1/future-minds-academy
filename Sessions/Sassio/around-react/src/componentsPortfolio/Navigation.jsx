/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navigation(props) {
    return (
        <div>
            <div className="row ">
                <div className={props.class}>
                    <a href="#">All Project</a>
                    <a href="#">E-commerce</a>
                    <a href="#">Digital Design</a>
                    <a href="#">Branding</a>
                    <a href="#">Web Design</a>
                </div>
            </div>
        </div>
    )
}