import React from 'react';

const AddEmployees = () => {
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-center my-3'>Add Employees</h1>
            <div className='lg:w-[70%] mx-auto my-8 bg-base-300 lg:p-11 p-2'>
                <form>
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