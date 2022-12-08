import React, { useContext } from 'react';
import { BarChart, XAxis, CartesianGrid, YAxis, Tooltip, Bar } from 'recharts';
import { DataContext } from '../../context/Provider/Provider';


const Chart = () => {
    const { submittedFormData } = useContext(DataContext)

    const data = [submittedFormData];
    console.log(submittedFormData);
    return (
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="projecNameValue" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="maxXValue" fill="#8884d8" barSize={30} />
        </BarChart>
    );
};

export default Chart;