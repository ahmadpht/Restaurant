import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../../components/Ingredients/Ingredients";
import Tags from "../../components/Tags/Tags";

const Recipe = () => {
  const [meal, setMeal] = useState([]);
  const params = useParams();
  const finalArr = [];

  const ingredientArr = [];
  const measureArr = [];

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
      });
      
  }, [params]);

  for (let item in meal) {
    if (item.includes("strIngredient")) {
      if (meal[item] === "") {
        break;
      } else {
        ingredientArr.push(meal[item]);
      }
    }
  }
  for (let measures in meal) {
    if (measures.includes("strMeasure")) {
      if (meal[measures] === " ") {
        break;
      } else {
        measureArr.push(meal[measures]);
      }
    }
  }

  for (let i = 0; i < ingredientArr.length; i++) {
    finalArr.push(`${ingredientArr[i]} ${measureArr[i]}`);
  }
  console.log(meal);
  return (
    <div className="max-w-screen flex flex-col justify-center items-center my-10">
      <div className="w-96 flex flex-col">
        <img className="w-96 h-96" src={meal.strMealThumb} alt={meal.idMeal} />
        <Tags meal={meal} />
        <p className="text-5xl font-semibold">{meal.strMeal}</p>
        <div className="my-10">
          {finalArr.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <p className="text-justify">Instructions: {meal.strInstructions}</p>
        <div className="flex justify-between my-10">
          <a href={meal.strSource}>Source</a>
          <a href={meal.strYoutube}>Youtube</a>
        </div>
      </div>
        <Ingredients ingredientsArr={ingredientArr} />
    </div>
  );
};

export default Recipe;
