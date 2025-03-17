import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const test = 10;
    const authInfo = {
        test
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;