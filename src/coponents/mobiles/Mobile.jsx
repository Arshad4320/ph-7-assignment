import { FaRegHeart } from "react-icons/fa";

const Mobile = ({ data, handleAddCart }) => {
  return (
    <div className="bg-blue-200 border-2 rounded-t-md border-blue-200">
      <div className="">
        <img className="w-full h-full" src={data.image_url} alt="" />
      </div>{" "}
      <div className="p-2">
        <span>{data.name}</span>

        <div className="flex justify-between ">
          <button
            onClick={() => {
              handleAddCart(data);
            }}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
