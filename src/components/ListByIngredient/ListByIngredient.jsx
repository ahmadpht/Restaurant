import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ListByIngredient = () => {
    const params = useParams();
    console.log(params)
    const [items, setItems] = useState({});

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
        .then(res => console.log(res.data.meals))
        .then(res => setItems(res?.data?.meals))
    },[])

  return (
    <div>
      <p>{params.name}</p>
      {
        items.map((item, idx) => {
            return(
                <p key={idx}>{item[idx]?.strMeal}</p>
            )
        })
      }
    </div>
  )
}

export default ListByIngredient
