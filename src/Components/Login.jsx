import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="bg-base-200 min-h-[calc(100vh-65px)] flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-5">Login to the Systema!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;