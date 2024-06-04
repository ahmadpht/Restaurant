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
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const lists = ['c', 'a', 'i'];
  const  {selectTag, setSelectTag} = useContext(MainContext);
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


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
      <div className="grid grid-cols-4 justify-items-center">
      {
        recipes ?
        <Food meals={recipes} />
        : <h1>could not find</h1>}
        <div onClick={() => setIsOpen(!isOpen)} className="fixed bottom-10 right-4 w-20 h-20 shadow-xl bg-orange-500 rounded-full flex justify-center items-center text-white hover:text-gray-300 ">
          <FaFilter className="text-2xl"/>
        </div>
        {/* <div className={`${!isOpen ? 'opacity-100 right-[15vw] top-[20vh]' :'opacity-0 -right-[100vw]'} w-[70vw] h-[60vh] flex flex-col justify-around items-center transition-all ease-in-out duration-300 fixed top-96  bg-white shadow-lg backdrop-filter bg-opacity-75 backdrop-blur-lg border-b-2 rounded-lg`}>
          <button onClick={()=> setIsOpen(!isOpen)} className="absolute top-0 right-0 bg-red-500 w-10 h-10 flex justify-center items-center"><IoClose className="text-2xl text-white"/></button>
          <div className="flex justify-evenly w-full">
            {
              lists?.map((list, idx) =>{
                return (<SelectList list={list} key={idx} />)
              })
            }
              <select className="w-44 bg-orange-500 text-white outline-none border-none capitalize cursor-pointer" onChange={e => setSelectTag(`search.php?f=${e.target.value}`)}>
            {
              alphabet.map((item, idx) => {
                  return(
                    <option className='bg-white text-black' key={idx}>
                    {item}
                    </option>
                  )
                })
              }
              </select>
          </div>
            <button className="w-52 h-12 text-2xl text-white bg-orange-500 rounded-xl " onClick={() => setSelectTag('search.php?s=')}>reset</button>
        </div> */}

        <div className={`${!isOpen ? 'opacity-100 right-[30vw] top-[20vh]' :'opacity-0 -right-[100vw]'} w-[40vw] h-[60vh] flex flex-col justify-around items-center transition-all ease-in-out duration-300 fixed top-96  bg-white shadow-lg backdrop-filter bg-opacity-75 backdrop-blur-lg border-b-2 rounded-lg`}>
          <button onClick={()=> setIsOpen(!isOpen)} className="absolute top-0 right-0 bg-red-500 w-10 h-10 flex justify-center items-center"><IoClose className="text-2xl text-white"/></button>
          <div className="flex justify-evenly w-full">
            {
              lists?.map((list, idx) =>{
                return (<SelectList list={list} key={idx} />)
              })
            }
              <select className="w-20 bg-orange-500 text-white outline-none border-none capitalize cursor-pointer" onChange={e => setSelectTag(`search.php?f=${e.target.value}`)}>
            {
              alphabet.map((item, idx) => {
                  return(
                    <option className='bg-white text-black' key={idx}>
                    {item}
                    </option>
                  )
                })
              }
              </select>
          </div>
            <button className="w-96 h-12 text-2xl text-white bg-orange-500 rounded-xl " onClick={() => setSelectTag('search.php?s=')}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
