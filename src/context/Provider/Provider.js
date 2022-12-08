import React, { createContext, useState } from 'react';


export const DataContext = createContext()

const Provider = ({ children }) => {
    const [projectName, setProjectName] = useState('')
    const [projectDesc, setProjectDesc] = useState('')
    const [clientName, setClientName] = useState('')
    const [contractorName, setContractorName] = useState('')
    const [maxX, setMaxX] = useState('')
    const [minX, setMinX] = useState('')
    const [maxY, setMaxY] = useState('')
    const [minY, setMinY] = useState('')
    const [maxZ, setMaxZ] = useState('')
    const [minZ, setMinZ] = useState('')
    const maxValues = { maxX, maxY, maxZ }
    const minValues = { minX, minY, minZ }

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
        minValues
    }
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default Provider;