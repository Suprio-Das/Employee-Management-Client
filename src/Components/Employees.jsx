import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Employees = () => {
    const loadedData = useLoaderData();
    const [employees, setEmployees] = useState(loadedData);
    const handleUpdateEmployees = e => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const designation = form.designation.value;
        const department = form.department.value;
        const photo = form.photo.value;
        const updatedEmployee = { id, name, email, phone, designation, department, photo };

        // sending data to backend
        fetch(`http://localhost:5000/employees/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedEmployee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setEmployees(prevEmployees =>
                        prevEmployees.map(emp =>
                            emp._id === id ? { ...emp, ...updatedEmployee } : emp
                        )
                    );
                    toast.success('Employee updated successfully...', {
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

                    document.getElementById(`${id}`).close();
                }
            })
    }
    const handleDeleteEmployees = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/employees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Employee has been deleted.",
                                icon: "success"
                            });

                            const remaining = employees.filter(emp => emp._id !== id);
                            setEmployees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            {/* Toast Container */}
            <ToastContainer></ToastContainer>
            <h1 className='text-3xl font-extrabold text-center my-3'>Employees</h1>
            <div className='w-[80%] mx-auto'>
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
                                            <p className="bg-orange-500 p-2 flex items-center justify-center text-white rounded-xs cursor-pointer" onClick={() => document.getElementById(`${employee._id}`).showModal()}><MdModeEdit /></p>
                                            <p className="bg-red-500 p-2 flex items-center justify-center text-white rounded-xs cursor-pointer" onClick={() => handleDeleteEmployees(employee._id)}><MdOutlineDelete /></p>
                                        </div>
                                        {/* Update Employee Modal */}
                                        <dialog id={employee._id} className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Update Employee Profile</h3>
                                                <form onSubmit={handleUpdateEmployees}>
                                                    <div className='lg:flex gap-3'>
                                                        <input type="text" defaultValue={employee._id} name="id" className="hidden" />
                                                        <fieldset className="fieldset w-full">
                                                            <legend className="fieldset-legend">Name</legend>
                                                            <input type="text" className="input w-full" name='name' defaultValue={employee?.name} placeholder="Enter Employee Name" />
                                                        </fieldset>
                                                        <fieldset className="fieldset w-full">
                                                            <legend className="fieldset-legend">Email</legend>
                                                            <input type="text" className="input w-full" name='email' defaultValue={employee?.email} placeholder="Enter Employee Email" readOnly />
                                                        </fieldset>
                                                    </div>
                                                    <div className='lg:flex gap-3'>
                                                        <fieldset className="fieldset w-full">
                                                            <legend className="fieldset-legend">Phone</legend>
                                                            <input type="text" className="input w-full" name='phone' defaultValue={employee?.phone} placeholder="Enter Employee Phone" />
                                                        </fieldset>
                                                        <fieldset className="fieldset w-full">
                                                            <legend className="fieldset-legend">Designation</legend>
                                                            <input type="text" className="input w-full" name='designation' defaultValue={employee?.designation} placeholder="Enter Employee Designation" />
                                                        </fieldset>
                                                    </div>
                                                    <div className='lg:flex gap-3'>
                                                        <fieldset className="fieldset w-full">
                                                            <legend className="fieldset-legend">Department</legend>
                                                            <input type="text" className="input w-full" name='department' defaultValue={employee?.department} placeholder="Enter Employee Department" />
                                                        </fieldset>
                                                        <fieldset className="fieldset w-full">
                                                            <legend className="fieldset-legend">Profile URL</legend>
                                                            <input type="text" className="input w-full" name='photo' defaultValue={employee?.photo} placeholder="Enter Employee Prfile URL" />
                                                        </fieldset>
                                                    </div>
                                                    <input type="submit" className='btn btn-neutral w-full mt-5' value="Update Employee" />
                                                </form>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
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