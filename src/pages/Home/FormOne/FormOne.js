import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../context/Provider/Provider';

const FormOne = () => {
    const { setProjectName, setProjectDesc, setClientName, setContractorName, formData } = useContext(DataContext)
    const { projectName, projectDesc, clientName, contractorName } = formData;


    return (
        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
                <label htmlFor="name" className="font-bold">Project Name: </label>

                <div className="relative">
                    <input
                        onChange={(e) => setProjectName(e.target.value)}
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Project Name"
                        defaultValue={projectName}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="name" className="font-bold">Project Description: </label>
                <div className="relative">
                    <textarea
                        onChange={(e) => setProjectDesc(e.target.value)}
                        rows="4" cols="50"
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Project Description"
                        defaultValue={projectDesc}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="name" className="font-bold">Client: </label>

                <div className="relative">
                    <input
                        onChange={(e) => setClientName(e.target.value)}
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Client Name"
                        defaultValue={clientName}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="name" className="font-bold">Contractor: </label>

                <div className="relative">
                    <input
                        onChange={(e) => setContractorName(e.target.value)}
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        placeholder="Write Contractor Name"
                        defaultValue={contractorName}
                    />
                </div>
            </div>

            {
                (projectName.length === 0 || projectDesc.length === 0 || clientName.length === 0 || contractorName.length === 0) ?
                    <div disabled>
                        <span
                            className="inline-block rounded-lg w-32 text-center bg-blue-200 px-6 py-3 text-sm font-medium text-white"
                        >
                            Next
                        </span>
                    </div>
                    :
                    <div>
                        <Link to='/formtwo'>
                            <span
                                className="inline-block rounded-lg w-32 text-center bg-blue-500 px-6 py-3 text-sm font-medium text-white"
                            >
                                Next
                            </span>
                        </Link>
                    </div>
            }
        </form>
    );
};

export default FormOne;