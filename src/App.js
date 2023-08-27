import React, { useContext, useState } from "react";
import { Header } from './components/Header';
import { Outlet } from "react-router-dom";
import { UserContext, RestaurantContext } from "./context";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => {
    const [userName, setUserName] = useState('Default user');

    return (
        <Provider store={appStore}>
            <div className="font-sans text-slate-800">
                <UserContext.Provider value={{
                    userPlace: 'Bangalore',
                }}>
                    <Header />

                    <RestaurantContext.Provider value={{
                        userName,
                        setUserName
                    }}> 
                        <Outlet />
                    </RestaurantContext.Provider>
                </UserContext.Provider>
            </div>
        </Provider>

    );
};

export default App;
