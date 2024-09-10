import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='container'>
        <div>
            <img src="../images/logo.png" alt="logo" />
        </div>
        <div>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation