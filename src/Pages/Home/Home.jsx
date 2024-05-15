//react
import { useEffect, useState } from "react";
import axios from "axios";
//component
import Search from "../../components/Search/Search";
import Recipe from "../../components/Recipe/Recipe";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => {
        setRecipes(res.data.meals);
      });
  }, [query]);

  return (
    <div>
      <Search setQuery={setQuery} />
      <div className="grid grid-cols-4 justify-items-center">
        <Recipe meals={recipes} />
      </div>
    </div>
  );
};

export default Home;
