import React from "react";
import Mobile from "./Mobile";

const Mobiles = ({ mobile, handleAddCart }) => {
  return (
    <div className="grid grid-cols-4 gap-2 ">
      {mobile.map((data) => (
        <Mobile handleAddCart={handleAddCart} data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Mobiles;
