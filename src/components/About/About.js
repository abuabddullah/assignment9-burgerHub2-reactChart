import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='p-20 container mx-auto max-w-7xl'>
            <div className='flex justify-center'>
                <img src="./../../resources/burgerBanner.jpg" alt="Burger's Hub" className='max-w-full rounded-full' />
            </div>


            <div className='text-center mt-20'>

                <h1 className="text-5xl font-bold mb-4">
                    Burger's Hub
                </h1>
                <p className='my-10'><strong>
                    Every day, huge ammount of guests visit Burger's Hub restaurants around Bangladesh. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 2022, Burger's Hub is the third largest fast food hamburger chain in Bangladesh. The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 2 months.
                </strong></p>

                <div className='mt-14'>
                    <h1 className="text-3xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <address>
                        Mail : <a href="mailto:burgershub@phero.com" className='text-yellow-400'>Burger's Hub</a>. <br />
                        Visit us at : Level-4, 34, Awal Centre, Banani, Dhaka <br />
                        Bangladesh
                    </address>
                </div>

            </div>


            <div className='text-center mt-10'>

                <Link to="/home" className="rounded-full inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    Go Back to Home
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>

        </section>
    );
};

export default About;