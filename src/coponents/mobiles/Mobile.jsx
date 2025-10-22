// import { FaRegHeart } from "react-icons/fa";

// const Mobile = ({ data, handleAddCart, disabled, handleDisable }) => {
//   return (
//     <div className="bg-blue-200 border-2 rounded-t-md border-blue-200">
//       <div className="">
//         <img className="w-full h-full" src={data.image_url} alt="" />
//       </div>{" "}
//       <div className="p-2">
//         <span>{data.name}</span>

//         <div className="flex justify-between ">
//           <span>{data.price_bdt}</span>
//           <button
//             disabled={disabled}
//             className={`px-2 py-1 rounded text-white ${
//               disabled ? "bg-red-400 cursor-not-allowed" : "bg-gray-800"
//             }`}
//             onClick={() => {
//               handleDisable(data.id);
//               handleAddCart(data);
//             }}
//           >
//             <FaRegHeart />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mobile;

import { FaRegHeart } from "react-icons/fa";

const Mobile = ({ data, handleAddCart, disabled }) => {
  return (
    <div className="bg-blue-200 border-2 rounded-t-md border-blue-200">
      <div>
        <img className="w-full h-full" src={data.image_url} alt={data.name} />
      </div>
      <div className="p-2">
        <span className="block font-semibold">{data.name}</span>
        <div className="flex justify-between items-center mt-1">
          <span>{data.price_bdt}৳</span>
          <FaRegHeart
            disabled={disabled}
            className={`text-white   ${
              disabled
                ? "bg-red-600 w-6 h-6 p-1 rounded-full cursor-not-allowed"
                : "bg-gray-600 w-6 h-6 p-1 rounded-full"
            }`}
            onClick={() => handleAddCart(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
