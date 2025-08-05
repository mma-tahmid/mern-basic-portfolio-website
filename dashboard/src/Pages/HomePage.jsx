import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    return (

        <>
            <h1> Welcome to Admin Dashboad </h1>

            <NavLink to="/admin"> Go </NavLink>

        </>
    );
};

export default HomePage;