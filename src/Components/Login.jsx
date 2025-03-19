import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Loader from './Loader';

const Login = () => {
    const { signIn, user, loading } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password)
            .then(result => {
                if (result.user) {
                    toast.success('Logged-in to the Systema successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch(error => {
                if (error.message) {
                    toast.error('Are you sure you are the Administrador?', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            {
                loading ? <Loader></Loader>
                    :
                    (<div className="bg-base-200 min-h-[calc(100vh-65px)] flex flex-col justify-center items-center">
                        <div className="text-center">
                            {
                                user ?
                                    (
                                        <div>
                                            <h1 className="text-5xl font-bold my-5">You're into the Systema! <br /> Try to do something C<span className='text-6xl text-orange-600'>O-O</span>L.</h1>
                                            <button className='btn btn-neutral'><Link to='/profile'>View Profile</Link></button>
                                        </div>
                                    )
                                    :
                                    <h1 className="text-5xl font-bold my-5">Login to the Systema!</h1>
                            }
                        </div>
                        {
                            user ? "" : (
                                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                    <div className="card-body">
                                        <form onSubmit={handleLogin} className="fieldset">
                                            <label className="fieldset-label">Email</label>
                                            <input type="email" className="input" name='email' placeholder="Email" />
                                            <label className="fieldset-label">Password</label>
                                            <input type="password" className="input" name='password' placeholder="Password" />
                                            <div><a className="link link-hover">Forgot password?</a></div>
                                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                                        </form>
                                    </div>
                                </div>
                            )
                        }
                    </div>)
            }
        </div>
    );
};

export default Login;