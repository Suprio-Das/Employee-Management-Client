import React from 'react';

const Profile = () => {
    return (
        <div className='w-[70%] min-h-[calc(100vh-65px)] flex flex-col justify-center items-center mx-auto'>
            <div className="w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden p-6 text-center border border-orange-500">
                <img
                    className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200"
                    src="https://i.ibb.co.com/BmXkp7h/my-profile-linkedin.png"
                    alt="Profile"
                />
                <h2 className="text-xl font-semibold mt-4">Suprio Das</h2>
                <p className="text-gray-600">Junior MERN Stack Developer</p>
                <p className="text-gray-500 mt-2">📞 +880 1234-567890</p>
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg cursor-pointer hover:bg-orange-600 transition">
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;