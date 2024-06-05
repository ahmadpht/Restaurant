import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import RandomMeal from "../RandomMeal/RandomMeal";
import { useEffect, useState } from "react";

const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollPosition)
  
  return (
    <div className={`${scrollPosition >= 25 ? 'bg-white' : 'bg-transparent'} h-20 w-full transition-all duration-300 flex justify-center items-center fixed top-0 z-10 backdrop-filter bg-opacity-75 backdrop-blur-lg shadow-lg`}>
      <Link to={'/'} className="text-4xl">
        <IoHome className="text-orange-500" />
      </Link>
      <RandomMeal />
    </div>
  );
};

export default Header