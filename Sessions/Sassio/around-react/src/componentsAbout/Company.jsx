import React from "react";

export default function Company() {
    return (
        <div>
                  <div class="wrapper-md text-center">
         <div class="row">
            <div class="col-1 company-section about">
               <button class="speciale btn-classic">ABOUT COMPANY</button>
               <h1 class="display-1 company-info title">All services for your online presence</h1>
               <p class="company-info">
                  Since 2017, we have led innovation and new product delivery <br/> in
                  business startup services delivered online.
               </p>
               <div class="row">
                  <div class="col-5 m-1">
                     <div class="back-pink p-1">
                        <img src="assets/images/sketch.png" alt="sketch" />
                     </div>
                  </div>
                  <div class="col-5 missions">
                     <h3 class="dark">Our Mission</h3>
                     <p class="company-paragraf">We have all the business products in one place so <br/> you can focus on
                        what you do best.</p>
                  </div>
               </div><br />
               <div class="row">
                  <div class="col-5 m-1">
                     <div class="back-blue p-1">
                        <img src="assets/images/color.png" alt="sketch" />
                     </div>
                  </div>
                  <div class="col-5 missions">
                     <h3 class="dark">Our Vission</h3>
                     <p class="company-paragraf">We have all the business products in one place so <br/> you can focus on
                        what you do best.</p>
                  </div>
               </div>
            </div>
            <div class="col-5">
               <img src="assets/images/double.png" alt="images of missions" class="img-missions"/>
            </div>
         </div>
      </div>
        </div>
    )
}