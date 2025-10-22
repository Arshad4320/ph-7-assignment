// import { useEffect, useState } from "react";
// import Mobiles from "./coponents/mobiles/Mobiles";
// import Cards from "./coponents/card/Cards";

// function App() {
//   const [mobile, setMobile] = useState([]);
//   const [cart, setCart] = useState([]);

//   const [disabled, setDisabled] = useState(null);

//   const [totalPrice, setTotalPrice] = useState(0);

//   const handleAddCart = (item) => {
//     setCart([...cart, item]);
//     handleTotalAmount(item);
//   };
//   const handleDisable = (item) => {
//     const remainingCart = cart.find((cart) => cart.id === item);

//     if (remainingCart) {
//       alert("item already exist");
//       return;
//     }
//     setDisabled(item);
//   };
//   const handleRemoveToCart = (item) => {
//     const remainingData = cart.filter((data) => data.id !== item.id);
//     setCart(remainingData);
//     setTotalPrice(totalPrice - item.price_bdt);
//   };
//   const handleTotalAmount = (item) => {
//     setTotalPrice(totalPrice + item.price_bdt);
//   };

//   useEffect(() => {
//     fetch("mobile.json")
//       .then((res) => res.json())
//       .then((data) => setMobile(data));
//   }, []);

//   return (
//     <>
//       <div className="flex gap-2  m-4 ">
//         <div className="left-container w-[70%] border-2 p-2 border-blue-400 m-2">
//           <p>all content</p>
//           <Mobiles
//             disabled={disabled}
//             handleDisable={handleDisable}
//             handleAddCart={handleAddCart}
//             mobile={mobile}
//           />
//         </div>
//         <div className="right-container w-[30%] border-2 border-blue-400 m-2 p-2">
//           {" "}
//           <p>card content</p>
//           {cart.map((data) => (
//             <Cards
//               handleRemoveToCart={handleRemoveToCart}
//               data={data}
//               key={data.id}
//             />
//           ))}
//           <span className="border-t-2 border-blue-500">
//             Total Phone Price{totalPrice}
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import Mobiles from "./coponents/mobiles/Mobiles";
import Cards from "./coponents/card/Cards";

function App() {
  const [mobile, setMobile] = useState([]);
  const [cart, setCart] = useState([]);

  // multiple disable IDs track করার জন্য array
  const [disabled, setDisabled] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  // 👉 Add to cart + disable logic
  const handleAddCart = (item) => {
    const isExist = cart.find((cartItem) => cartItem.id === item.id);
    if (isExist) {
      alert("Item already in cart!");
      return;
    }

    setCart([...cart, item]);
    handleTotalAmount(item);

    // নতুন id array তে যোগ করা হচ্ছে
    setDisabled([...disabled, item.id]);
  };

  // 👉 Remove from cart logic
  const handleRemoveToCart = (item) => {
    const remainingData = cart.filter((data) => data.id !== item.id);
    setCart(remainingData);
    setTotalPrice(totalPrice - item.price_bdt);

    // remove করলে disable থেকেও বাদ দিচ্ছি
    setDisabled(disabled.filter((id) => id !== item.id));
  };

  // 👉 Total calculation
  const handleTotalAmount = (item) => {
    setTotalPrice(totalPrice + item.price_bdt);
  };

  // 👉 Load phones data
  useEffect(() => {
    fetch("mobile.json")
      .then((res) => res.json())
      .then((data) => setMobile(data));
  }, []);

  return (
    <>
      <div className="flex gap-2 m-4">
        {/* Left Section */}
        <div className="left-container w-[70%] border-2 p-2 border-blue-400 m-2">
          <p className="text-lg font-semibold mb-2">All Mobiles</p>
          <Mobiles
            disabled={disabled}
            handleAddCart={handleAddCart}
            mobile={mobile}
          />
        </div>

        {/* Right Section */}
        <div className="right-container w-[30%] border-2 border-blue-400 m-2 p-2">
          <p className="text-lg font-semibold mb-2">Cart</p>
          {cart.map((data) => (
            <Cards
              handleRemoveToCart={handleRemoveToCart}
              data={data}
              key={data.id}
            />
          ))}

          <span className="border-t-2 border-blue-500 block mt-2 pt-2 text-lg font-semibold">
            Total Phone Price: {totalPrice}৳
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
