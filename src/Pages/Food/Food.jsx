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

  const ingeredientArr = [];
  const measureArr = [];
  
  for (let item in meal) {
    if (item.includes("strIngredient")) {
      if (meal[item] === "") {
        break;
      } else {
        ingeredientArr.push(meal[item]);
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

  let finalArr = [];
  // let finalArr = ingeredientArr.concat(measureArr)

  // console.log(typeof ingeredientArr,typeof  measureArr)

  // console.log(typeof Object.values(ingeredientArr))

  // let j = 0;
  for(let j = 0; ingeredientArr.length > j; j++) {
    // finalArr.push(ingeredientArr.keys());
    finalArr(...finalArr, ingeredientArr[j])
    j++;
  }
  console.log(finalArr)

  // let name = ["sara , reza , ali"]
  // let family = ["ahmadi , mosavi ,moradi"]


  return (
    <main className="main-content bg-whitesmoke">
      <p>hi</p>
    </main>
  );
};

export default Food;
