import { Link } from "react-router-dom"
import { MainContext } from "../../Context/FoodContext";
import { useContext } from "react";

const Tags = ({meal}) => {
  console.log(meal)
  const {setSelectTag} = useContext(MainContext);

  return (
    <div className="h-10 w-56 flex justify-evenly items-center">
      <Link onClick={setSelectTag('c')}>{meal.strCategory}</Link>
      <Link onClick={setSelectTag('a')} to={`/ingredient/${meal.strArea}`}>Area</Link>
      {
        meal && meal.strTags !== null ? <p>{meal.strTags}</p>
        : ''
      }
    </div>
  )
}

export default Tags
