import React from "react";
import discount from "../assets/images/discount.png";
import offers1 from "../assets/images/offers1.png";

const Offers = () => {
  return (
    <>
      <section className="offers-section">
        <div>
          <img className="discount" src={discount} alt="Discount" />
        </div>
        <div>
          <img src={offers1} alt="Offers 1" />
        </div>
      </section>
    </>
  );
};

export default Offers;
