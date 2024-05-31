import { Link } from "react-router-dom"
import { MainContext } from "../../Context/FoodContext";
import { useContext } from "react";
import { FaTag } from "react-icons/fa";


const Tags = ({meal}) => {

  const {setSelectTag} = useContext(MainContext);

  return (
    <div className="h-10 w-96 flex justify-between items-center flex-wrap">
        <FaTag className="text-orange-500 text-xl rotate-90"/>
      <Link onClick={() => setSelectTag(`filter.php?c=${meal.strCategory}`)} to={'/'} className="underline text-blue-500">{meal.strCategory}</Link>
      <Link onClick={() => setSelectTag(`filter.php?a=${meal.strArea}`)} to={'/'} className="underline text-blue-500">{meal.strArea}</Link>
      {
        meal && meal.strTags !== null ? <p>{meal.strTags}</p>
        : ''
      }
    </div>
  )
}

export default Tags
