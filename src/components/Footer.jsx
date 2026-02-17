import React from "react";
import "./Footer.css";

export default function Footer() {
return ( <footer className="footer">


  <div className="footer-container">

  
    <div className="footer-col">
      <h2 className="footer-logo">Tea Mafia 295</h2>
      <p>
        Tea Mafia 295 is one of the most loved cafes in Jammu. 
        Enjoy delicious food, coffee, pizza, and a relaxing ambience 
        perfect for friends, couples, and family gatherings.
      </p>
    </div>

    <div className="footer-col">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/reservation">Reservation</a></li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Contact Us</h3>
      <p>📍 Tea Mafia 295, near shiv hardware store, Miran Sahib, Jammu</p>
      <p>📞 +91 90708 41822</p>
      <p>✉ teamafia295@gmail.com</p>
    </div>


    <div className="footer-col">
      <h3>Opening Hours</h3>
      <p>Monday – Sunday</p>
      <p>11:00 AM – 11:30 PM</p>

      <div className="socials">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Google Maps</a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Tea Mafia 295. All Rights Reserved. By PIMS World
  </div>

</footer>


);
}
