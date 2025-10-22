import React from "react";
import { IoClose } from "react-icons/io5";

const Cards = ({ data, handleRemoveToCart }) => {
  return (
    <div>
      <div className="p-2 flex justify-between ">
        <div className="">
          <img className="w-16 h-16" src={data.image_url} alt="" />
          <span>{data.name}</span>
          <br />
          <span>{data.price_bdt}</span>
        </div>
        <button>
          <IoClose
            onClick={() => {
              handleRemoveToCart(data);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Cards;
