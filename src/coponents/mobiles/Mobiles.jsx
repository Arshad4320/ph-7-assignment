import React from "react";
import Mobile from "./Mobile";

const Mobiles = ({ mobile }) => {
  return (
    <div className="grid grid-cols-4 gap-2 ">
      {mobile.map((data) => (
        <Mobile data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Mobiles;
