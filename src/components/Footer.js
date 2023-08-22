import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="footer-column">
          <h3 className="red-heading">Fooodish</h3>
          <p>Continue Foodish 2023 all rights reserved</p>
          <h3>Follow Us On</h3>
        </div>
        <div className="footer-column">
          <h3 className="red-heading">Menu</h3>
          <a href="#" className="grey-link">Home</a>
          <a href="#" className="grey-link">Offers</a>
          <a href="#" className="grey-link">Service</a>
          <a href="#" className="grey-link">About Us</a>
        </div>
        <div className="footer-column">
          <h3 className="red-heading">Information</h3>
          <p className="grey-text">Menu</p>
          <p className="grey-text">Quality</p>
          <p className="grey-text">Make a Choice</p>
          <p className="grey-text">Salad With Vegetable</p>
          <p className="grey-text">Fast Delivery</p>
          <p className="grey-text">Subscribe</p>
        </div>
        <div className="footer-column">
          <h3 className="red-heading">Contact</h3>
          <p className="grey-text">+123 456 789</p>
          <p className="grey-text">Explore</p>
          <p className="grey-text">Info@Foodish.Com</p>
          <p className="grey-text">1245, New York</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
