import React from "react";
import menu1 from "../assets/images/menu1.png";
import animeburg from "../assets/images/animeburg.png";


const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h3 className="red-heading" id="header">
          <span className="yellow-shadow">All Fast Food is</span> <br />Available at Foodle
        </h3>
        <div className="foodle-content">
          <img src={menu1} alt="" className="sandwich-image" />
          <p className="foodle-text">
            We Are Just Away Click Away When You <br />
            crave For Delicious Fast Food
          </p>
        </div>
        <div className="buttons">
          <button id="now" className="red-button">Buy Now</button>
          <button className="white-button">How To Order</button>
        </div>
      </div>
      <div className="animeburg-image">
        <img className="burg" src={animeburg} alt="" />
      </div>
    </section>
  );
};

export default Home;
