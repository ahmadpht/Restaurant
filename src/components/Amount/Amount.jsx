import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Amount = () => {

  return (
    <div className="w-full flex justify-evenly absolute bottom-5">
      <button className="h-12 w-1/4 flex justify-center items-center bg-orange-500 rounded-xl text-xl">
        <FaMinus />
      </button>
      <h3 className="h-12 w-1/4 flex justify-center items-center text-2xl font-semibold">01</h3>
      <button className="h-12 w-1/4 flex justify-center items-center bg-orange-500 rounded-xl text-xl">
        <FaPlus />
      </button>
    </div>
  );
};

export default Amount;
