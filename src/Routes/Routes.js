import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Chart from '../pages/Chart/Chart';
import FormOne from '../pages/Home/FormOne/FormOne';
import FormTwo from '../pages/Home/FormTwo/FormTwo';
import Home from '../pages/Home/Home';
import Result from '../pages/Result/Result';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    children: [
                        {
                            path: '/',
                            element: <FormOne></FormOne>
                        },
                        {
                            path: 'formtwo',
                            element: <FormTwo></FormTwo>
                        },

                    ]

                },
                {
                    path: 'result',
                    element: <Result></Result>
                },
                {
                    path: 'chart',
                    element: <Chart></Chart>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;