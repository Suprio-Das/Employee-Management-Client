import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = () => {
    const { loading, user } = useContext(AuthContext);
    if (loading) {
        return <p>Loading</p>
    }
    if (user) {
        return <Outlet></Outlet>;
    }
    return (
        <Navigate to='/' />
    );
};

export default PrivateRoutes;