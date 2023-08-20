import { useContext } from 'react';
import logo from '../../assets/images/food-logo.png';
import { Link } from "react-router-dom";
import { UserContext } from '../../context';


export const Header = () => {
    const { userPlace } = useContext(UserContext);

    return (
        <div className="shadow-md flex justify-between items-center px-48">
            <img src={logo} width="90" height="90" />
            <div className="flex gap-12 text-lg font-medium">
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
                <span>
                    <div className='text-sm'>location: {userPlace}</div>
                </span>
            </div>
        </div>
    );
};