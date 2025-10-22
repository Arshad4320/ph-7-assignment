// import React from "react";
// import Mobile from "./Mobile";

// const Mobiles = ({ mobile, handleDisable, handleAddCart, disabled }) => {
//   return (
//     <div className="grid grid-cols-4 gap-2 ">
//       {mobile.map((data) => (
//         <Mobile
//           handleDisable={handleDisable}
//           disabled={disabled === data.id}
//           handleAddCart={handleAddCart}
//           data={data}
//           key={data.id}
//         />
//       ))}
//     </div>
//   );
// };

// export default Mobiles;

import React from "react";
import Mobile from "./Mobile";

const Mobiles = ({ mobile, handleAddCart, disabled }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {mobile.map((data) => (
        <Mobile
          key={data.id}
          data={data}
          handleAddCart={handleAddCart}
          disabled={disabled.includes(data.id)}
        />
      ))}
    </div>
  );
};

export default Mobiles;
