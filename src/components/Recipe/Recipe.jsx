import { Link } from "react-router-dom";

const Recipe = ({ meals }) => {
  console.log(meals);
  return (
    meals &&
    meals.map((meal) => {
      return (
        <div
          className="w-96 h-96 border-2 border-orange-500 flex items-center pb-10 flex-col my-16 relative rounded-xl"
          key={Math.random()}
        >
          <img
            className="w-56 h-56 rounded-full absolute -top-20 border-8 border-orange-500 bg-white"
            src={`${meal.strMealThumb}/preview`}
            alt=""
          />
          <div className="absolute bottom-20 text-xl text-center">
            <p className="text-3xl font-medium">{meal.strMeal}</p>
            <p className="my-4 text-gray-800">{meal.strArea}</p>
            <p className="text-gray-800">{meal.strCategory}</p>
          </div>
          <Link
            to={`food/${meal.idMeal}`}
            className="w-full text-center absolute bottom-0 text-2xl py-2 bg-orange-500 rounded-b-lg"
          >
            More...
          </Link>
        </div>
      );
    })
  );
};

export default Recipe;
