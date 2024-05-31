import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Recipe from "./Pages/Recipe/Recipe";
// context
import FoodContext from "./Context/FoodContext";
import Layout from "./Pages/Layout/Layout";

const App = () => {
  return (
    <FoodContext>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/area/:id" />
          </Routes>
        </Layout>
      </Router>
    </FoodContext>
  );
};

export default App;
