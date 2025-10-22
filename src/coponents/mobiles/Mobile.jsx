import { FaRegHeart } from "react-icons/fa";

const Mobile = ({ data }) => {
  console.log(data);
  return (
    <div className="border  rounded-md">
      <div className="">
        <img className="w-full h-full" src={data.image_url} alt="" />
      </div>{" "}
      <div className="p-2">
        <span>{data.name}</span>

        <div className="flex justify-between ">
          <span>{data.price_bdt}</span>
          <button>
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
