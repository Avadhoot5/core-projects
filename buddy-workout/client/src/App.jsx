import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// pages & components
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}


export const BASE_URL = 'http://localhost:4000/';
export default App
