import React, { createContext, useState } from 'react';


export const DataContext = createContext()

const Provider = ({ children }) => {
    // form one Data
    const [projectName, setProjectName] = useState('')
    const [projectDesc, setProjectDesc] = useState('')
    const [clientName, setClientName] = useState('')
    const [contractorName, setContractorName] = useState('')
    // form two Data 
    const [maxX, setMaxX] = useState('')
    const [minX, setMinX] = useState('')
    const [maxY, setMaxY] = useState('')
    const [minY, setMinY] = useState('')
    const [maxZ, setMaxZ] = useState('')
    const [minZ, setMinZ] = useState('')

    // form submit data 
    const [submittedFormData, setSubmittedFormData] = useState({})

    // max and min values 
    const maxValues = { maxX, maxY, maxZ }
    const minValues = { minX, minY, minZ }

    // form one data object 
    const formData = {
        projectName,
        projectDesc,
        clientName,
        contractorName
    }




    const data = {
        formData, setProjectName, setProjectDesc, setClientName, setContractorName,
        setMaxX,
        setMinX,
        setMaxY,
        setMinY,
        setMaxZ,
        setMinZ,
        maxValues,
        minValues,
        setSubmittedFormData,
        submittedFormData

    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default Provider;