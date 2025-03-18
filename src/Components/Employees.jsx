import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

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
                                employees.map((employee, index) => <tr key={employee._id}>
                                    <th>{index + 1}</th>
                                    <td>{employee?.name}</td>
                                    <td>{employee?.email}</td>
                                    <td>{employee?.phone}</td>
                                    <td>{employee?.designation}</td>
                                    <td>{employee?.department}</td>
                                    <td className='flex justify-center'><img className='w-11 h-11 rounded-full' src={employee?.photo} alt="" /></td>
                                    <td>
                                        <div className="flex gap-1">
                                            <p className="bg-orange-500 p-2 flex items-center justify-center text-white rounded-xs cursor-pointer"><MdModeEdit /></p>
                                            <p className="bg-red-500 p-2 flex items-center justify-center text-white rounded-xs cursor-pointer"><MdOutlineDelete /></p>
                                        </div>
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