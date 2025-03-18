import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Provider/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedInAdmin, setLoggedInAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // auth observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser?.email) {
                fetch(`http://localhost:5000/admins/${currentUser.email}`, {
                    method: "GET"
                })
                    .then(res => res.json())
                    .then(data => {
                        setLoggedInAdmin(data);
                    })
                    .catch(error => console.log(error));
            }
        });

        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        loading,
        signIn,
        logOut,
        user,
        loggedInAdmin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;