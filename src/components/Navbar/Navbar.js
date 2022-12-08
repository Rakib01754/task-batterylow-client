import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="container mx-auto overflow-hidden bg-gray-600 text-white">
                <div className="flex items-center justify-between px-4 py-5">
                    <div className="w-full">
                        <div className="flex items-center">
                            <div className="mr-20">
                                <Link to="/">
                                    <h1 className='text-xl md:text-3xl font-bold ml-4'>ABC Engine</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;