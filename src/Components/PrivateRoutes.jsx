import React from 'react';
import { NavLink } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    return (
        <NavLink to='/'></NavLink>
    );
};

export default PrivateRoutes;