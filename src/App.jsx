import { useEffect, useState } from "react";
import Mobiles from "./coponents/mobiles/Mobiles";
import Cards from "./coponents/card/Cards";

function App() {
  const [mobile, setMobile] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddCart = (item) => {
    setCart([...cart, item]);
  };
  const handleRemoveToCart = (item) => {
    const remainingData = cart.filter((data) => data.id !== item.id);
    setCart(remainingData);
  };
  useEffect(() => {
    fetch("mobile.json")
      .then((res) => res.json())
      .then((data) => setMobile(data));
  }, []);

  return (
    <>
      <div className="flex gap-2  m-4 ">
        <div className="left-container w-[70%] border-2 p-2 border-blue-400 m-2">
          <p>all content</p>
          <Mobiles handleAddCart={handleAddCart} mobile={mobile} />
        </div>
        <div className="right-container w-[30%] border-2 border-blue-400 m-2 p-2">
          {" "}
          <p>card content</p>
          {cart.map((data) => (
            <Cards
              handleRemoveToCart={handleRemoveToCart}
              data={data}
              key={data.id}
            />
          ))}
          {/* <span>{data.price_bdt}</span> */}
        </div>
      </div>
    </>
  );
}

export default App;
