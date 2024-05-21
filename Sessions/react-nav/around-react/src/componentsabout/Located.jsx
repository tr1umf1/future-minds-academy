import React from "react";

export default function Located() {
    return (
        <div className="container-fixed gap-7 container-res">
        <div className="row-direction">
         <div className="col">
            <div className="locations-header">
               <div>
                  <span className="section-subtitle">Where</span>
                  <h1 className="section-title">We are located in London</h1>
               </div>
               <div className="button-container gap-1">
                  <button className="round-button">&leftarrow;</button>
                  <button className="round-button">&rightarrow;</button>
               </div>
            </div>
         </div>
         <div className="col">
            <div className="locations-container gap-3">
               <div className="image">
                  <img src="assets/images/Location-1.png" alt="" />
                  <div className="overlay">
                     <span className="material-icons zoom-in">zoom_in</span> 
                  </div>
               </div>
               <div className="image">
                  <img src="assets/images/Location-2.png" alt="" />
                  <div className="overlay">
                     <span className="material-icons zoom-in">zoom_in</span>
                  </div>
               </div>
               <div className="image">
                  <img src="assets/images/Location-3.png" alt="" />
                  <div className="overlay">
                     <span className="material-icons zoom-in">zoom_in</span>
                  </div>
               </div>
               <div className="image">
                  <img src="assets/images/Location-4.png" alt="" />
                  <div className="overlay">
                     <span className="material-icons zoom-in">zoom_in</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
    )
}