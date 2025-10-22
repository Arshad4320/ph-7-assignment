import { useEffect, useState } from "react";
import Mobiles from "./coponents/mobiles/Mobiles";
import { IoClose } from "react-icons/io5";
function App() {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    fetch("mobile.json")
      .then((res) => res.json())
      .then((data) => setMobile(data));
  }, []);

  return (
    <>
      <div className="flex gap-2 border-2 m-4 border-blue-400">
        <div className="left-container w-[70%] border-2 p-2 border-blue-400 m-2">
          <p>all content</p>
          <Mobiles mobile={mobile} />
        </div>
        <div className="right-container w-[30%] border-2 border-blue-400 m-2 p-2">
          {" "}
          <p>card content</p>
        </div>
      </div>
    </>
  );
}

export default App;
