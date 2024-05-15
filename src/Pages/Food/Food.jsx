import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Food = () => {
  const [meal, setMeal] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
      });
  }, []);

  console.log(meal)
  // const [ingredient, setIngredient] = useState([]);
  // const [measure, setMeasure] = useState([]);
  // let i = false;
  // let j = 1;
  
  // console.log(ingredient)
  // console.log(meal)

  // while(i) {
  //   if(meal.strIngredient+String(j) !== ''){
  //     setIngredient(...ingredient, meal.strIngredient+String(j))
  //   j++
  //   } else {
  //     i = false;
  //   }
  // }


  return (
      <div>
        <h1>{meal?.strMeal}</h1>
        <h3>{meal?.strCategory}</h3>
        {
          
        }
      </div>
  )
};

export default Food;
