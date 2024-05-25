/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function Map() {
    return (
        <div>
            <div className="row">
                <div className="col-3 map-pic">
                    <iframe className="iframe-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.16392808568!2d21.11752767997125!3d42.66643583189325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1711409851264!5m2!1sen!2s"
                        style={{ border: "0" }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
