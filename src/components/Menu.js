import React from "react";
import { menu } from "../Data";

const Menu = () => {
  return (
    <>
      <section>
        <div className="menu">
          <h3 >
            Our <span className="red-text">Regular</span> Menu
          </h3>
        </div>
        <div>
          <div className="menu-header">
            <p className="regular">
              These Are Our Regular Menus. You can <br />
              Order Anything You Like
            </p>
            <button id="see-all" className="red-button">See all</button>
          </div>
          <div className="menu-grid">
            {menu.map((item, index) => (
              <div className="menu-item" key={index}>
                <img src={item.img} alt="" />
                <p className="bold-title">{item.title}</p>
                <p>
                  <span className="price">{item.price}</span> 
                  <button className="red-button">Buy Now</button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
