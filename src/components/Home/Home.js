import React from 'react';

const Home = () => {
    return (
        <section className='m-20'>
            <div className="container max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-8">

                <article className='flex flex-col justify-center'>
                    <div className='mb-10'>

                        <h1 className="text-5xl font-bold mb-4">
                            Burger's Hub
                        </h1>
                        <h1 className="text-2xl">
                            The taste u choosed . . .
                        </h1>
                    </div>

                    <p className='text-justify mb-10'>
                        Burgers are one of the most popular foods in Bangladesh and on Facebook, with almost 20 million uses of the #burger and #burgers hashtags . . .
                    </p>

                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Read More . . .</button>


                </article>

                <div className='flex justify-end'>
                    <img src="./../../resources/burgerBanner.jpg" alt="burger" width={400} className="rounded-full max-w-full" />
                </div>
            </div>
        </section>
    );
};

export default Home;