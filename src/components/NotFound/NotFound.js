import React from 'react';

const NotFound = () => {
    return (
        <section className='m-20'>
            <div className="container max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-8">

                <article className='flex flex-col justify-center'>
                    
                    <h1 className="text-7xl font-bold text-yellow-400 text-center">
                        404 ! <br />
                         Not Found
                    </h1>


                </article>

                <div className='flex justify-center md:justify-end hidden md:block'>
                    <img src="./notfound.jpg" alt="notfound" width={400} className="rounded-full max-w-full" />
                </div>
            </div>
        </section>
    );
};

export default NotFound;