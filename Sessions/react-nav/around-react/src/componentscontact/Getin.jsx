import React from "react";

export default function Getin() {
    return (
        <div>
             <div className="container-fixed container-res gap-4">
      <div className="links">
         <span>Homepage</span><span></span><span className="active">Contacts</span>
      </div>
      <div className="row contact-form gap-3">
         <div className="contactForm-content">
            <h1>Contacts</h1>
            <span>Get in touch with us by completing the below form or call us now</span>
         </div>
         <div className="row">
            <form action="#" className="contact-form">
               <div className="form-group">
                  <div className="row gap-2">
                     <div className="col-1">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                     </div>
                     <div className="col-1">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" required />
                     </div>
                  </div>
               </div>
               <div className="form-group">
                  <div className="row gap-2">
                     <div className="col-1">
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                     </div>
                     <div className="col-1">
                        <label for="location">Location</label>
                        <select name="location">
                           <option value="Locations">All locations</option>
                           <option value="Kosovo">Kosovo</option>
                           <option value="Italy">Italy</option>
                           <option value="France">France</option>
                           <option value="Germany">Germany</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-1">
                     <div className="form-group">
                        <label for="message">How can we help?</label>
                        <textarea id="message" name="message" rows="4" placeholder="How can we help?" required></textarea>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <div className="form-group">
                        <label>
                        <input type="checkbox" required />
                        <span className="terms">I agree to the <u>Terms & Conditions</u></span>
                        </label>
                     </div>
                     <div className="form-group">
                        <button type="submit" className="form-btn button-primary">Send a Request</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
      </div>
    </div>
    )
}