import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Information Form</h1>

                <p className="mt-4 text-gray-500">
                    Please fill up the required field with valid information
                </p>
            </div>

            <Outlet></Outlet>
        </div>

    );
};

export default Home;