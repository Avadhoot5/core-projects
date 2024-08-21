import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Mate</h1>
                </Link>
                <nav>
                  <Link to="/signup"><h3>Signup</h3></Link>
                  <Link to="/login"><h3>Login</h3></Link>
                </nav>
            </div>
        </header>
    </div>
  )
}


export default Navbar;