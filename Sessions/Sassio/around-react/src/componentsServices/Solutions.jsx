/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Solutions() {
    return (
        <div className="row">
            <div class="col-1">
               <img src="assets/images/services-first.png" class="img-missions" />
            </div>
            <div class="col-1 solution-info">
               <h1 class="solution-heading">IT solutions for your <br /> business.</h1>
               <p class="solution-paragraf">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit
                  amet semper tristique.
                  Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.
               </p>
               <div class="solutions">
                  <ul>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Installation Guide</span>
                        </div>
                     </li>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Easy setup process</span>
                        </div>
                     </li>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Live call support</span>
                        </div>
                     </li>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Start a private group video call</span>
                        </div>
                     </li>
                  </ul>
               </div>
               <button class="solution-btn">Explore</button>
            </div>
        </div>
    )
}