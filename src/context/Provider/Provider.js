import React, { createContext, useState } from 'react';


export const DataContext = createContext()

const Provider = ({ children }) => {
    const [projectName, setProjectName] = useState('')
    const [projectDesc, setProjectDesc] = useState('')
    const [clientName, setClientName] = useState('')
    const [contractorName, setContractorName] = useState('')

    const formData = {
        projectName,
        projectDesc,
        clientName,
        contractorName
    }





    const data = { formData, setProjectName, setProjectDesc, setClientName, setContractorName }
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default Provider;