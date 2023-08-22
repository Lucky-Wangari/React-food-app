import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { details } from "../Data";


const Delivery = () => {
  return (
    <section>
      <div className="details-boxes">
        {details.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <LinesEllipsis
              text={item.details}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
