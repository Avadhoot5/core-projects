import './Header.css';
import Button from '../Button/Button';

const Header = () => {
  return (
    <nav>
        <div className="nike-logo">
            <img src="../public/logos/brand_logo.png" alt="nike logo" />
        </div>
        <div>
        <ul>
            <li>menu</li>
            <li>location</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        </div>
        <div>
            <Button textColor='white' name='LOGIN' color='red'/>
        </div>
    </nav>
  )
}

export default Header;
