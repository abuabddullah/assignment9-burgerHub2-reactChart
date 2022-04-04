import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleReview = ({ sgReview }) => {
    // console.log(sgReview);
    const { id, name, review, rating, picture } = sgReview;
    // console.log(picture);

    const navigate = useNavigate();

    return (

        <div className="mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
                <img src={picture} alt="" />
            </Link>
            <div className="p-5">
                <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <p className="min-h-[150px] mb-3 font-normal text-gray-700 dark:text-gray-400">{review.slice(0, 150) + ` . . .`} <span onClick={() => navigate(`/review/${id}`)}><small className='text-yellow-400 cursor-pointer'>read more</small></span> </p>
                <h5 className='mb-4 flex items-center'><span className='font-bold mr-2'>Ratings : </span> {rating}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </h5>
            </div>
        </div>

    );
};

export default SingleReview;