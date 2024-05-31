//react
import { useEffect, useState } from "react";
import axios from "axios";
//component
import Search from "../../components/Search/Search";
import Food from "../../components/Food/Food";
import { FaFilter } from "react-icons/fa";
import { useContext } from "react";
import { MainContext } from "../../Context/FoodContext";
import SelectList from "../../components/SelectList/SelectList";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const lists = ['c', 'a', 'i'];
  const  {selectTag, setSelectTag} = useContext(MainContext);
  const alpahbet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/${selectTag}`)
      .then((res) => {
        setRecipes(res.data.meals);
      });
    }, [selectTag]);

  return (
     <div className="relative">
      <Search />
      <div className="grid grid-cols-4 justify-items-center">
      {
        recipes ?
        <Food meals={recipes} />
        : <h1>could not find</h1>}
        <div onClick={() => setIsOpen(!isOpen)} className="fixed bottom-10 right-4 w-20 h-20 shadow-xl bg-orange-500 rounded-full flex justify-center items-center text-white hover:text-gray-300 ">
          <FaFilter className="text-2xl"/>
        </div>
        <div className={`${isOpen ? 'opacity-100 right-[40vw]' : 'opacity-0 -right-96'} transition-all ease-in-out duration-300 fixed top-96 w-[20vw] h-96 flex justify-center items-center bg-gray-500`}>
          <button onClick={()=> setIsOpen(!isOpen)} className="absolute top-0 right-0">X</button>
          {
            lists.map((list, idx) =>{
              return (<SelectList list={list} key={idx} />)
            })
          }
            <select>
          {
            alpahbet.map((item, idx) => {
                return(
                  <option key={idx} onClick={() => setSelectTag(`search.php?f=${item}`)}>
                  {item}
                  </option>
                )
              })
            }
            </select>
            <button onClick={() => setSelectTag('search.php?s=')}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
