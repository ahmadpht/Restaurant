//react
import { useEffect, useState } from "react";
import axios from "axios";
//component
import Search from "../../components/Search/Search";
import Food from "../../components/Food/Food";
import { FaFilter } from "react-icons/fa";
import { useContext } from "react";
import { MainContext } from "../../Context/FoodContext";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const lists = ['c', 'a', 'i'];
  const  {selectTag, setSelectTag} = useContext(MainContext);


  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/${selectTag}`)
      .then((res) => {
        setRecipes(res?.data?.meals)
      })
    }, [selectTag]);

  return (
     <div className="relative">
      <Search />
      <div className="mb-40 grid grid-cols-4 justify-items-center">
      {
        recipes ?
        <Food meals={recipes} />
        : <h1>could not find</h1>}
        <div onClick={() => setIsOpen(!isOpen)} className="fixed bottom-10 right-4 w-20 h-20 shadow-xl bg-orange-500 rounded-full flex justify-center items-center text-white hover:text-gray-300 ">
          <FaFilter className="text-2xl"/>
        </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} lists={lists} />
      </div>
    </div>
  );
};

export default Home;
