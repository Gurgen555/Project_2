import React from "react";
import "./Footer.scss";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className="footer">
      <div className="browse">
        <h3>Browse</h3>
        <ul>
          <li>All Products</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Theme</li>
        </ul>
      </div>
      <div className="help">
        <h3>Help</h3>
        <ul>
          <li>FAQ</li>
          <li>Terms & conditions</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          Our story began in 2001 in a small studio in the middle of nowhere.
          With only one desk and next to no free time, our brand was born. Our
          passion for unique design and collaboration brought our vision, and
          products, to life.
        </p>
      </div>
      <div className="social">
        <h3>Social</h3>
        <ul>
       <SocialIcon url="https://twitter.com/safeasmilkco"/>
       <SocialIcon url="https://www.pinterest.com/shopify/"/>
       <SocialIcon url="https://www.instagram.com/shopify/"/>

        </ul>
      </div>
    </div>
  );
}
