import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-[calc(100vh-65px)] flex items-center justify-center'>
            <span className="loading loading-spinner loading-xl" ></span >
        </div >
    );
};

export default Loader;