import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(json => setReviews(json))
    }, [])
    return [reviews, setReviews];
};

export default useReviews;