import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Employees = () => {
    const loadedData = useLoaderData();
    const [employees, setEmployees] = useState(loadedData);
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-center my-3'>Employees</h1>
            <div className='w-[70%] mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Designation</th>
                                <th>Department</th>
                                <th>Profile Picture</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>cy@gmail.com</td>
                                <td>01111111111</td>
                                <td>Developer</td>
                                <td>XYZ</td>
                                <td className='flex justify-center'><img className='w-11 h-11 rounded-full' src="https://i.ibb.co.com/BmXkp7h/my-profile-linkedin.png" alt="" /></td>
                                <td>
                                    <button className='btn bg-orange-500 text-white w-11'>Edit</button>
                                    <button className='btn bg-red-500 text-white w-11 ml-2'>X</button>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>cy@gmail.com</td>
                                <td>01111111111</td>
                                <td>Developer</td>
                                <td>XYZ</td>
                                <td className='flex justify-center'><img className='w-11 h-11 rounded-full' src="https://i.ibb.co.com/BmXkp7h/my-profile-linkedin.png" alt="" /></td>
                                <td>
                                    <button className='btn bg-orange-500 text-white w-11'>Edit</button>
                                    <button className='btn bg-red-500 text-white w-11 ml-2'>X</button>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>cy@gmail.com</td>
                                <td>01111111111</td>
                                <td>Developer</td>
                                <td>XYZ</td>
                                <td className='flex justify-center'><img className='w-11 h-11 rounded-full' src="https://i.ibb.co.com/BmXkp7h/my-profile-linkedin.png" alt="" /></td>
                                <td>
                                    <button className='btn bg-orange-500 text-white w-11'>Edit</button>
                                    <button className='btn bg-red-500 text-white w-11 ml-2'>X</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Employees;