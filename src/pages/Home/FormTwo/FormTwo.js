import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../../context/Provider/Provider';
import { useCSVReader } from 'react-papaparse';




const FormTwo = () => {
    const { setMaxX, setMinX, setMaxY, setMinY, setMaxZ, setMinZ, maxValues, minValues, setSubmittedFormData } = useContext(DataContext)
    const navigate = useNavigate()
    const { maxX, maxY, maxZ } = maxValues;
    const { minX, minY, minZ } = minValues;
    const { CSVReader } = useCSVReader();
    const { formData } = useContext(DataContext)
    const { projectName, projectDesc, clientName, contractorName } = formData;
    const [csvData, setCsvData] = useState([])
    const mainData = csvData.data
    const slicedData = mainData?.slice(1, 1362)



    // for max Values Of X,Y,Z
    Math.max.apply(Math, slicedData?.map(v => setMaxX(v[1])));
    Math.max.apply(Math, slicedData?.map(v => setMaxY(v[2])));
    Math.max.apply(Math, slicedData?.map(v => setMaxZ(v[3])));


    // for min Values Of X,Y,Z
    Math.min.apply(Math, slicedData?.map(v => setMinX(v[1])));
    Math.min.apply(Math, slicedData?.map(v => setMinY(v[2])));
    Math.min.apply(Math, slicedData?.map(v => setMinZ(v[3])));

    // form submit and get data 
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const maxXValue = form.maxX.value;
        const maxYValue = form.maxY.value;
        const maxZValue = form.maxZ.value;
        const minXValue = form.minX.value;
        const minYValue = form.minY.value;
        const minZValue = form.minZ.value;
        const projecNameValue = form.projectName.value;
        const projecDescValue = form.projectDesc.value;
        const clientNameValue = form.client.value;
        const contractorNameValue = form.contractor.value;

        const formAllData = { maxXValue, maxYValue, maxZValue, minXValue, minYValue, minZValue, projecNameValue, projecDescValue, clientNameValue, contractorNameValue }
        setSubmittedFormData(formAllData)
        navigate('/result')
    }




    const styles = {
        csvReader: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
        },
        browseFile: {
            width: '40%',
        },
        acceptedFile: {
            border: '1px solid #ccc',
            height: 45,
            lineHeight: 2.5,
            paddingLeft: 10,
            width: '60%',
        },
        remove: {
            borderRadius: 0,
            padding: '0 20px',
        },
        progressBarBackgroundColor: {
            backgroundColor: 'red',
        },
    };

    return (
        <form onSubmit={handleFormSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            {/* from previous input  */}
            <div>
                <label htmlFor="name" className="font-bold">Project Name: </label>

                <div className="relative">
                    <input
                        type="text"
                        name='projectName'
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        defaultValue={projectName} disabled
                    />
                </div>
            </div>
            <div>
                <label htmlFor="name" className="font-bold">Project Description: </label>

                <div className="relative">
                    <textarea
                        rows="4" cols="50"
                        type="text"
                        name='projectDesc'
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        defaultValue={projectDesc} disabled
                    />
                </div>
            </div>
            <div>
                <label htmlFor="name" className="font-bold">Client: </label>

                <div className="relative">
                    <input
                        type="text"
                        name='client'
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        defaultValue={clientName} disabled
                    />
                </div>
            </div>
            <div>
                <label htmlFor="name" className="font-bold">Contractor: </label>

                <div className="relative">
                    <input
                        type="text"
                        name='contractor'
                        className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                        defaultValue={contractorName} disabled
                    />
                </div>
            </div>
            <hr className='border-b-2 border black' />

            {/* in this form  */}
            <h4 className='text-xl font-bold mt-2'>Please Upload A CSV File Here </h4>
            <CSVReader
                onUploadAccepted={(results) => {
                    setCsvData(results)
                }}
            >
                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                }) => (
                    <>
                        <div style={styles.csvReader}>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 inline-flex items-center  mx-2' type='button' {...getRootProps()} style={styles.browseFile}>
                                Browse file
                            </button>
                            <div style={styles.acceptedFile}>
                                {acceptedFile && acceptedFile.name}
                            </div>
                            <button {...getRemoveFileProps()} style={styles.remove} className='bg-red-700 hover:bg-red-900 text-white font-bold mx-2  px-4 inline-flex items-center'>
                                Remove
                            </button>
                        </div>
                        <ProgressBar style={styles.progressBarBackgroundColor} />
                    </>
                )}
            </CSVReader>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="max-x" className="font-bold">Max X: </label>

                    <div className="relative">
                        <input
                            type="number"
                            name='maxX'
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Max X value"
                            defaultValue={maxX}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="min-x" className="font-bold">Min X: </label>

                    <div className="relative">
                        <input
                            type="number"
                            name='minX'
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Min X value"
                            defaultValue={minX}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="max-y" className="font-bold">Max Y: </label>

                    <div className="relative">
                        <input
                            type="number"
                            name='maxY'
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Max Y value"
                            defaultValue={maxY}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="min-y" className="font-bold">Min Y: </label>

                    <div className="relative">
                        <input
                            type="number"
                            name='minY'
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Min Y value"
                            defaultValue={minY}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="max-z" className="font-bold">Max Z: </label>

                    <div className="relative">
                        <input
                            type="number"
                            name='maxZ'
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Max Z value"
                            defaultValue={maxZ}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="min-z" className="font-bold">Min Z: </label>

                    <div className="relative">
                        <input
                            type="number"
                            name='minZ'
                            className="w-full rounded-lg border border-black p-4 pr-12 text-sm shadow-sm mt-2"
                            placeholder="Min Z value"
                            defaultValue={minZ}
                            required
                        />
                    </div>
                </div>
            </div>


            <div className='flex items-center justify-between'>
                <Link to='/'>
                    <p className='inline-block rounded-lg w-32 text-center bg-blue-500 px-6 py-3 text-sm font-medium text-white'>Go Back</p>
                </Link>
                <div>
                    <button
                        type='submit'
                        className="inline-block rounded-lg w-32 text-center bg-blue-500 px-6 py-3 text-sm font-medium text-white"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormTwo;