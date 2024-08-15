import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// pages & components
import Home from "./pages/Home"
import Navbar from "./components/NavBar"

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}


export const BASE_URL = 'http://localhost:4000/';
export default App
