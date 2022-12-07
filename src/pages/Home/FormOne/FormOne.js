import React from 'react';
import { Link } from 'react-router-dom';

const FormOne = () => {
    return (
        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
                <label for="name" className="font-bold">Project Name: </label>

                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Project Name"
                    />
                </div>
            </div>
            <div>
                <label for="name" className="font-bold">Project Description: </label>

                <div className="relative">
                    <textarea
                        rows="4" cols="50"
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Project Description"
                    />
                </div>
            </div>
            <div>
                <label for="name" className="font-bold">Client: </label>

                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Client Name"
                    />
                </div>
            </div>
            <div>
                <label for="name" className="font-bold">Contractor: </label>

                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Contractor Name"
                    />
                </div>
            </div>


            <div>
                <Link to='/formtwo'>
                    <span
                        className="inline-block rounded-lg w-32 text-center bg-blue-500 px-6 py-3 text-sm font-medium text-white"
                    >
                        Next
                    </span>
                </Link>
            </div>
        </form>
    );
};

export default FormOne;