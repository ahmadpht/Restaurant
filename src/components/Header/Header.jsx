import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import RandomMeal from "../RandomMeal/RandomMeal";

const Header = () => {

  return (
    <div className=" h-20 w-full flex justify-center items-center bg-white fixed top-0 z-10 backdrop-filter bg-opacity-75 backdrop-blur-lg border-b-2 shadow-lg">
      <Link to={'/'} className="text-4xl">
        <IoHome className="text-orange-500" />
      </Link>
      <RandomMeal />
    </div>
  );
};

export default Header;
