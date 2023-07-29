import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <h1>OOPS!!!</h1>
            <h2>Page not found</h2>
            <h3>{error.data}</h3>
        </>
    );
};
