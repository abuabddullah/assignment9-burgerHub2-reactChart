import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReviewsContext } from '../../App';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const [reviews, setReviews] = useContext(ReviewsContext)
    // console.log(reviews);

    const navigate = useNavigate();

    return (
        <>
            <section className='md:m-20'>
                <div className="container max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-8">

                    <article className='flex flex-col justify-center order-2 md:order-1'>
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

                        <button onClick={() => navigate("/about")} type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">About Us . . .</button>


                    </article>

                    <div className='flex justify-center md:justify-end order-1 md:order-2 mb-10 md:mb-0'>
                        <img src="./../../resources/burgerBanner.jpg" alt="burger" width={400} className="rounded-full max-w-full" />
                    </div>
                </div>
            </section>

            <section className='mb-20'>
                <h1 className="text-4xl font-bold mb-10 text-center">
                    Customer's Reviews (3)
                </h1>

                {!reviews.length ? <LoadingSpinner /> : (

                    <div className='container max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            reviews.slice(0 - 3).map(sgReview => <SingleReview
                                key={sgReview.id}
                                sgReview={sgReview} />)
                        }
                    </div>
                )}



                <div className='text-center mt-10'>

                    <Link to="/reviews" className="rounded-full inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400  hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                        See All reviews
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>

            </section>
        </>
    );
};

export default Home;