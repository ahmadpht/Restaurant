import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Food = () => {
  const [meal, setMeal] = useState([]);
  const params = useParams();
  const finalArr =[];

  const ingredientArr = [];
  const measureArr = [];
  
  useEffect(() => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    .then((res) => {
      setMeal(res.data.meals[0]);
    });
  }, []);
  
  
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

  for(let i = 0 ; i < ingredientArr.length ; i++){
    finalArr.push(`${ingredientArr[i]} ${measureArr[i]}`);
  }
  console.log(meal)
  return (
    <div>
      <main className="min-w-screen flex flex-row-reverse justify-evenly my-10">
        <div className="w-96 flex flex-col">
          <div className="h-10 w-56 flex justify-evenly items-center">
            <p>{meal.strArea}</p>
            <p>{meal.strCategory}</p>
            <p>{meal.strTags}</p>
          </div>
          <p className="text-5xl font-semibold">{meal.strMeal}</p>
          <div className="my-10">
            {
              finalArr.map((item , index) =>{
                return(
                  <div key={index}>
                <p>{item}</p>
              </div>
            )})}
          </div>
          <p className="text-justify">Instructions: {meal.strInstructions}</p>
          <div className="flex justify-between my-10">
            <a href={meal.strSource}>Source</a>
            <a href={meal.strYoutube}>Youtube</a>
          </div>
        </div>
        <img className="w-96 h-96" src={meal.strMealThumb} alt={meal.idMeal} />
      </main>
      <div className="min-w-[90vw] h-96 bg-blue-600 my-10 flex justify-center items-center overflow-x-auto">
          {ingredientArr.map((item, idx) => {
            return (
              <div key={idx} className="w-96 mx-2">
                <img className="w-full" src={`https://www.themealdb.com/images/ingredients/${item}.png`} />
                <p className="text-center">{item}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default Food;
