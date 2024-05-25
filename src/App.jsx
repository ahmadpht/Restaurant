import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Recipe from "./Pages/Recipe/Recipe";
import ListByIngredient from "./components/ListByIngredient/ListByIngredient";
// context
import FoodContext from "./Context/FoodContext";

const App = () => {
  return (
    <FoodContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/ingredient/:id" element={<ListByIngredient />} />
          <Route path="/area/:id" />
        </Routes>
      </Router>
    </FoodContext>
  );
};

export default App;
