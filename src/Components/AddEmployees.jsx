import React from 'react';

const AddEmployees = () => {
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-center my-3'>Add Employees</h1>
            <div className='w-[70%] mx-auto'>
                <form>
                    <div className='flex gap-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" placeholder="Enter Employee Name" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="text" className="input w-full" placeholder="Enter Employee Email" />
                        </fieldset>
                    </div>
                    <div className='flex gap-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" placeholder="Enter Employee Name" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="text" className="input w-full" placeholder="Enter Employee Email" />
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployees;