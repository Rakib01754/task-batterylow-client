import { Outlet } from 'react-router-dom';

const Home = () => {

    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 shadow-lg bg-gray-400">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-4xl font-bold md:text-5xl underline">Project Information Form</h1>

                <p className="mt-4">
                    Please fill up the required field with valid information about your project
                </p>
            </div>

            <Outlet></Outlet>
        </div>

    );
};

export default Home;