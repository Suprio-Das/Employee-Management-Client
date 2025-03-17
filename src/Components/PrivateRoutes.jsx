import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    if (loading) {
        <p>Loading</p>
    }
    if (user) {
        return children;
    }
    return (
        <NavLink to='/'></NavLink>
    );
};

export default PrivateRoutes;