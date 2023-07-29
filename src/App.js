import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from './components/Header';
import { RestaurantsContainer } from './components/RestaurantsContainer';
import { About, Contact, ErrorPage, RestaurantMenu } from "./components/pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <RestaurantsContainer />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: 'Contact',
                element: <Contact />
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
