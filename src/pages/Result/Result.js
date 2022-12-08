import React, { useContext } from 'react';
import { DataContext } from '../../context/Provider/Provider';
import Pdf from "react-to-pdf";
import { Link } from 'react-router-dom';

const ref = React.createRef();

const Result = () => {
    const { submittedFormData } = useContext(DataContext)
    const { maxXValue, maxYValue, maxZValue, minXValue, minYValue, minZValue, projecNameValue, projecDescValue, clientNameValue, contractorNameValue } = submittedFormData

    return (
        <div className='container my-8 mx-auto'>
            <h1 className='font-bold text-4xl my-4 text-center'>Result Table </h1>

            <table className="w-[50%] mx-auto border-collapse block md:table" ref={ref}>
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Project Name</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Project Description</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Client</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Contract</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Max X Value</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Max Y Value</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Max Z Value</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Min X Value</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Min Y Value</th>
                        <th className="bg-gray-600 p-2 text-white md:border md:border-grey-500 block md:table-cell">Min Z Value</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group">
                    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row text-left md:text-center">
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Project Name:</span>{projecNameValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Description:</span>{projecDescValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Client Name:</span>{clientNameValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden ">Contractor Name:</span>{contractorNameValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Max X Value:</span>{maxXValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Max Y Value:</span>{maxYValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Max Z Value:</span>{maxZValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Min X Value:</span>{minXValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Min Y Value:</span>{minYValue}</td>
                        <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden">Min Z Value:</span>{minZValue}</td>
                    </tr>
                </tbody>
            </table>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <div className='flex justify-center'>
                    <button className='btn text-white bg-green-500 p-2 mt-4' onClick={toPdf}>Download Result</button>
                </div>}
            </Pdf>
            <div className='flex justify-center'>
                <Link to='/chart'>
                    <button className='btn text-white bg-green-500 p-2 mt-4'>Show On Chart</button>
                </Link>
            </div>


        </div>
    );
};

export default Result;