import React, { useContext } from 'react';
import { DataContext } from '../../context/Provider/Provider';

const Result = () => {
    const { formData, maxValues, minValues } = useContext(DataContext)
    const { projectName, projectDesc, clientName, contractorName } = formData;
    const { maxX, maxY, maxZ } = maxValues;
    const { minX, minY, minZ } = minValues;
    return (
        <div className='container my-8 mx-auto'>
            <h1 className='font-bold text-4xl my-4 text-center'>Result Table</h1>
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Project Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Project Description</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Client</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Contract</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group font-bold">
                    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row text-left md:text-center">
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Project Name</span>{projectName}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Description</span>{projectDesc}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Client Name</span>{clientName}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Contractor Name</span>{contractorName}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Result;