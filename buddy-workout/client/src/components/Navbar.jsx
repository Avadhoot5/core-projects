import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {

  const { user } = useAuthContext();
  const { logout } = useLogout();
  
  const handleClick = () => {
    logout();
  }

  return (
    <div>
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Mate</h1>
                </Link>
                <nav>
                  <div>
                    {user && (
                      <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Logout</button>
                      </div>
                    )}
                  </div>
                  <div>
                    {!user && (
                      <div>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                      </div>
                    )}
                  </div>
                </nav>
            </div>
        </header>
    </div>
  )
}


export default Navbar;