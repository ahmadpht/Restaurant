import { Link } from "react-router-dom";

const Food = ({ meals }) => {
  return (
    meals &&
    meals.map((meal , idx) => {
      return (
        <div
          className="w-96 h-96 border-2 border-orange-500 flex items-center justify-center pb-10 mt-40 relative rounded-xl"
          key={idx}
        >
          <img
            className="w-56 h-56 rounded-full absolute -top-20 border-8 border-orange-500 bg-white"
            src={`${meal.strMealThumb}/preview`}
            alt=""
          />
          <p className={`text-3xl absolute text-center mx-4 ${meal.strMeal.length >= 50 ? 'top-44' : 'top-52'}`}>{meal.strMeal}</p>
          <Link
            to={`/recipe/${meal.idMeal}`}
            className="w-full text-center absolute bottom-0 text-2xl py-2 bg-orange-500 rounded-b-lg"
          >
            More...
          </Link>
        </div>
      );
    })
  );
};

export default Food;
