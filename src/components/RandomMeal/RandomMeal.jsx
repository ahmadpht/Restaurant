import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShuffle } from "react-icons/fa6";

const RandomMeal = () => {
  const [meal, setMeal] = useState([]);
  const [isTrue , setIsTrue] =useState(false)

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setMeal(res.data.meals[0]));
  }, [isTrue]);

  return (
    <Link to={`/recipe/${meal.idMeal}`} onClick={() => setIsTrue(!isTrue)}>
      <FaShuffle />
    </Link>
  );
};

export default RandomMeal;
