import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Food from "./Pages/Food/Food"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/food/:id" element={<Food />}/>
      </Routes>
    </Router>
  )
}

export default App
