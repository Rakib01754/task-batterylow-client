import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="bg-gray-500 text-white">
            <div className="container mx-auto overflow-hidden">
                <div className="flex items-center justify-between px-4 py-5">
                    <div className="w-[40%]">
                        <div className="flex items-center">
                            <div className="mr-20">
                                <Link to="/">
                                    <h1 className='text-xl md:text-3xl font-bold'>ABC Engine</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center justify-end">
                            <div className="w-auto">
                                <ul className="flex items-center mr-16">
                                    <li className="mr-9 font-medium hover:text-orange-500"><Link to="/result">Result</Link></li>
                                    <li className="mr-9 font-medium hover:text-orange-500"><Link to="chart">Chart</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;