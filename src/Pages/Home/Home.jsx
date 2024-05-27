//react
import { useEffect, useState } from "react";
import axios from "axios";
//component
import Search from "../../components/Search/Search";
import Food from "../../components/Food/Food";
import { FaFilter } from "react-icons/fa";


const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => {
        setRecipes(res.data.meals);
      });
      axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(res => setCountries(res?.data?.meals))
    }, [query]);

  return (
    <div className="relative">
      <Search setQuery={setQuery} />
      <div className="grid grid-cols-4 justify-items-center">
        <Food meals={recipes} />
        <div onClick={() => setIsOpen(!isOpen)} className="fixed bottom-10 right-4 w-20 h-20 shadow-xl bg-orange-500 rounded-full flex justify-center items-center text-white hover:text-gray-300 ">
          <FaFilter className="text-2xl"/>
        </div>
        <div className={`${isOpen ? 'opacity-0' : 'opacity-100'} fixed top-96 w-96 h-96 flex justify-center items-center bg-gray-500`}>
          <button onClick={()=> setIsOpen(!isOpen)} className="absolute top-0 right-0">X</button>
          <select>
            {
              countries && countries?.map((country, idx) => {
                return <option key={idx} value={country?.strArea}>{country?.strArea}</option>
              })
            }
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
