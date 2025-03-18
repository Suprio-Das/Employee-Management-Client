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
                            {
                                employees.map(employee => <tr key={employee._id}>
                                    <th>1</th>
                                    <td>{employee?.name}</td>
                                    <td>{employee?.email}</td>
                                    <td>{employee?.phone}</td>
                                    <td>{employee?.designation}</td>
                                    <td>{employee?.department}</td>
                                    <td className='flex justify-center'><img className='w-11 h-11 rounded-full' src={employee?.photo} alt="" /></td>
                                    <td>
                                        <button className='btn bg-orange-500 text-white w-11'>Edit</button>
                                        <button className='btn bg-red-500 text-white w-11 ml-2'>X</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Employees;