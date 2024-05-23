import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Food from "./Pages/Food/Food"
import ListByIngredient from "./components/ListByIngredient/ListByIngredient"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<Food />} />
        <Route path="/ingredient/:name" element={<ListByIngredient />} />
      </Routes>
    </Router>
  )
}

export default App
