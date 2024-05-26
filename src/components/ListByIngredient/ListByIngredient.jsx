import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Food from "../Food/Food";
import { MainContext } from "../../Context/FoodContext";

const ListByIngredient = () => {
  const params = useParams();
  const [items, setItems] = useState([]);
  const {selectTag} = useContext(MainContext);

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${selectTag}=${params.id}`
      )
      .then((res) => setItems(res?.data?.meals));
  }, [params.id]);

  return (
    <div className="grid grid-cols-4 justify-items-center mt-10">
      <Food meals={items} />
    </div>
  );
};

export default ListByIngredient;
