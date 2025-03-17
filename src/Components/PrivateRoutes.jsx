import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    if (loading) {
        return <p>Loading</p>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/' />
    );
};

export default PrivateRoutes;