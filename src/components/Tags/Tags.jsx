import { Link } from "react-router-dom"
import { MainContext } from "../../Context/FoodContext";
import { useContext } from "react";
import { FaTag } from "react-icons/fa";


const Tags = ({meal}) => {

  const {setSelectTag} = useContext(MainContext);

  return (
    <div className="h-10 w-96 flex justify-between items-center">
        <FaTag className="text-orange-500 text-xl rotate-90"/>
      <Link onClick={() => setSelectTag('c')} to={`/ingredient/${meal.strCategory}`} className="underline text-blue-500">{meal.strCategory}</Link>
      <Link onClick={() => setSelectTag('a')} to={`/ingredient/${meal.strArea}`} className="underline text-blue-500">{meal.strArea}</Link>

      {
        meal && meal.strTags !== null ? <p>{meal.strTags}</p>
        : ''
      }
    </div>
  )
}

export default Tags
