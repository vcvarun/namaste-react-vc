import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { RestaurantsContainer } from './components/RestaurantsContainer';
import { About, Contact, ErrorPage, RestaurantMenu } from "./components/pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";

const Grocery = lazy(() => import("./components/Grocery/Grocery"));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
