/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default function Team() {
    return (
        <div className="container-fixed gap-7 container-res">
             <div className="row-direction gap-3">
            <div className="col">
               <div className="card-header">
                  <span className="section-subtitle">Our Team</span>
                  <h1 className="section-title">Team of professionals</h1>
               </div>
            </div>
            <div className="col">
               <div className="team-members-container">
                  <div className="members-card">
                     <img src="assets/images/team-member-1.png" alt="" />
                     <div className="member-info">
                        <div className="member-name">Alice Patel</div>
                        <div className="role">Software Engineer</div>
                        <div className="social-icons">
                           <a href="#" className="fab fa-instagram social-icon"></a>
                           <a href="#" className="fab fa-facebook-f social-icon"></a>
                           <a href="#" className="fab fa-linkedin-in"></a>
                        </div>
                     </div>
                  </div>
                  <div className="members-card">
                     <img src="assets/images/team-member-2.png" alt="" />
                     <div className="member-info">
                        <div className="member-name">Daniel Garcia</div>
                        <div className="role">Network Engineer</div>
                        <div className="social-icons">
                           <a href="#" className="fab fa-instagram social-icon"></a>
                           <a href="#" className="fab fa-facebook-f social-icon"></a>
                           <a href="#" className="fab fa-linkedin-in"></a>
                        </div>
                     </div>
                  </div>
                  <div className="members-card">
                     <img src="assets/images/team-member-3.png" alt="" />
                     <div className="member-info">
                        <div className="member-name">Marta Black</div>
                        <div className="role">Web Dev</div>
                        <div className="social-icons">
                           <a href="#" className="fab fa-instagram social-icon"></a>
                           <a href="#" className="fab fa-facebook-f social-icon"></a>
                           <a href="#" className="fab fa-linkedin-in"></a>
                        </div>
                     </div>
                  </div>
                  <div className="members-card">
                     <img src="assets/images/team-member-4.png" alt="" />
                     <div className="member-info">
                        <div className="member-name">Ethan Parker</div>
                        <div className="role"> Database Administrator</div>
                        <div className="social-icons">
                           <a href="#" className="fab fa-instagram social-icon"></a>
                           <a href="#" className="fab fa-facebook-f social-icon"></a>
                           <a href="#" className="fab fa-linkedin-in"></a>
                        </div>
                     </div>
                  </div>
                  <div className="members-card">
                     <img src="assets/images/team-member-5.png" alt="" />
                     <div className="member-info">
                        <div className="member-name">Emily Chen</div>
                        <div className="role">Data Scientist</div>
                        <div className="social-icons">
                           <a href="#" className="fab fa-instagram social-icon"></a>
                           <a href="#" className="fab fa-facebook-f social-icon"></a>
                           <a href="#" className="fab fa-linkedin-in"></a>
                        </div>
                     </div>
                  </div>
                  <div className="members-card">
                     <img src="assets/images/team-member-6.png" alt="" />
                     <div className="member-info">
                        <div className="member-name">James Lee</div>
                        <div className="role">Cybersecurity Analyst</div>
                        <div className="social-icons">
                           <a href="#" className="fab fa-instagram social-icon"></a>
                           <a href="#" className="fab fa-facebook-f social-icon"></a>
                           <a href="#" className="fab fa-linkedin-in"></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row-direction">
            <div className="col">
               <div className="card-header">
                  <span className="section-subtitle">Testimonials</span>
                  <h1>What our clients say</h1>
               </div>
            </div>
            <div className="col container-fixed gap-7 container-res">
               <div className="testimonials-container">
                  <div className="profile">
                     <img src="assets/images/aboutUs-avatar.png" alt="" className="client-picture" />
                     <div className="username">
                        <span>Lilian Bocouse</span>
                        <span className="role">Head of Marketing</span>
                     </div>
                  </div>
                  <div className="testimonials">
                     <p>“Around provides us with the detailed and accurate data we need to make strategic
                        decisions. All
                        tools are constantly being improved and contain a lot of useful and interesting
                        information. Thanks
                        to Around, we can constantly analyze our big data quickly and efficiently.”
                     </p>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="slider-container">
                  <div className="slide"></div>
                  <div className="slide"></div>
                  <div className="slide"></div>
                  <div className="slide"></div>
               </div>
            </div>
         </div>
      </div>
    )
}