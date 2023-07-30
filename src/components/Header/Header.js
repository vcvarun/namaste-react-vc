import logo from '../../assets/images/food-logo.png';
import { Link } from "react-router-dom";
import './Header.scss';

export const Header = () => {
    return (
        <div className='app-header'>
            <img src={logo} width="90" height="90" />
            <div className='app-header__links'>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/about">About</Link>
                </span>
                <span>
                    <Link to="/contact">Contact</Link>
                </span>
                <span>
                    <Link to="/cart">Cart</Link>
                </span>
                <span>
                    <Link to="/grocery">Grocery</Link>
                </span>
            </div>
        </div>
    );
};