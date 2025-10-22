import React from "react";
import Mobile from "./Mobile";

const Mobiles = ({ mobile }) => {
  return (
    <div>
      {mobile.map((data) => (
        <Mobile data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Mobiles;
