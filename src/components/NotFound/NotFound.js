import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='md:m-20'>
            <div className="container max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-8">

                <article className='flex flex-col justify-center'>

                    <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 text-center">
                        404 ! <br />
                        Not Found
                    </h1>


                </article>

                <div className='md:flex justify-center md:justify-end hidden'>
                    <img src="./../../resources/error.jpg" alt="notfound" width={400} className="rounded-3xl max-w-full" />
                </div>
            </div>



            {/* <article className='flex flex-col justify-center'>

                <h1 className="text-7xl font-bold text-yellow-400 text-center">
                    404 ! <br />
                    Not Found
                </h1>


            </article> */}



            <div className='text-center my-10'>

                <Link to="/home" className="rounded-full inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    Go Back to Home
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>


        </section>
    );
};

export default NotFound;