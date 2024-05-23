import { Link } from "react-router-dom"
const Ingredients = ({ingredientsArr}) => {
  return (
    <div className="flex items-center max-w-[90vw] h-72 overflow-x-auto">
        {ingredientsArr.map((item, idx) => {
          return (
            <Link to={`/ingredient/${item}`} className="h-64 flex flex-col justify-evenly rounded-md hover:shadow-xl hover:bg-gray-100" key={idx}>
              <img
              className="max-w-44 max-h-44"
              src={`https://www.themealdb.com/images/ingredients/${item}.png`}
              />
              <p className="text-center">{item}</p>
            </Link>
          )
        })}
    </div>
  )
}

export default Ingredients
