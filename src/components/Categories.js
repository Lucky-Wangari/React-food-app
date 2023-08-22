import React from "react";
import { category } from "../Data"

const Categories = () => {
  return (
    <>
      <section>
        <div>
          <h3 className="menu">
            Best <span className="red-text">Delivered</span> Categories
          </h3>
          <p className="regular">
            Here Are Some Of Our Best Distributed <br />
            Categories. If You Want You Can Order From Here.
          </p>
          <div className="category-container">
            {category.map((item, index) => (
              <div className="category-item" key={index}>
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <button className="red-button">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
