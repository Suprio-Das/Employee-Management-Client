import React from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const AddEmployees = () => {
    const handleAddEmployees = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const designation = form.designation.value;
        const department = form.department.value;
        const photo = form.photo.value;
        const newEmployee = { name, email, phone, designation, department, photo };

        // sending data to backend
        fetch('http://localhost:5000/employees', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Employee inserta successfully...', {
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
            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <h1 className='text-3xl font-extrabold text-center my-3'>Add Employees</h1>
            <div className='lg:w-[70%] mx-auto my-8 bg-base-300 lg:p-11 p-2'>
                <form onSubmit={handleAddEmployees}>
                    <div className='lg:flex gap-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" name='name' placeholder="Enter Employee Name" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="text" className="input w-full" name='email' placeholder="Enter Employee Email" />
                        </fieldset>
                    </div>
                    <div className='lg:flex gap-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Phone</legend>
                            <input type="text" className="input w-full" name='phone' placeholder="Enter Employee Phone" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Designation</legend>
                            <input type="text" className="input w-full" name='designation' placeholder="Enter Employee Designation" />
                        </fieldset>
                    </div>
                    <div className='lg:flex gap-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Department</legend>
                            <input type="text" className="input w-full" name='department' placeholder="Enter Employee Department" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Profile URL</legend>
                            <input type="text" className="input w-full" name='photo' placeholder="Enter Employee Prfile URL" />
                        </fieldset>
                    </div>
                    <input type="submit" className='btn btn-neutral w-full mt-5' value="Add Employee" />
                </form>
            </div>
        </div>
    );
};

export default AddEmployees;