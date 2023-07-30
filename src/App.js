import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Header } from './components/Header';
import { RestaurantsContainer } from './components/RestaurantsContainer';
import { About, Contact, ErrorPage, RestaurantMenu } from "./components/pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery/Grocery"));

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
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ]
    }
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
