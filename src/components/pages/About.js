import React, { useContext } from 'react';
import { RestaurantContext } from '../../context';

export const About = () => {
    const { userName, setUserName, userPlace } = useContext(RestaurantContext);
    const data = useContext(RestaurantContext);
    console.log(userPlace)

    const handleUserName = e => {
        setUserName(e.target.value);
    };

    return (
        <div className="text-center p-8">
            <div>About Us</div>
            <label>Enter username:</label>
            <input className="border border-slate-500 rounded-md" type="text" value={userName} onChange={handleUserName} />
            <h1>user name: {userName}</h1>
        </div>

    );
};
