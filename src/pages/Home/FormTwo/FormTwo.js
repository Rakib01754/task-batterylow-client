import React from 'react';
import { Link } from 'react-router-dom';

const FormTwo = () => {
    return (
        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            {/* from previous input  */}
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

            {/* in this form  */}
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label for="max-x" className="font-bold">Max X: </label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Max X value"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label for="min-x" className="font-bold">Min X: </label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Min X value"
                            required
                        />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label for="max-y" className="font-bold">Max Y: </label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Max Y value"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label for="min-y" className="font-bold">Min Y: </label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Min Y value"
                            required
                        />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label for="max-z" className="font-bold">Max Z: </label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Max Z value"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label for="min-z" className="font-bold">Min Z: </label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Min Z value"
                            required
                        />
                    </div>
                </div>
            </div>



            <div>
                <Link>
                    <button
                        type='submit'
                        className="inline-block rounded-lg w-32 text-center bg-blue-500 px-6 py-3 text-sm font-medium text-white"
                    >
                        Submit
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default FormTwo;