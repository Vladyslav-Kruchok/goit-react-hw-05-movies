//React
//import { useOutletContext } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
//Component
import { Section } from "components/Section";
import { ReviewsDetails } from 'components/ReviewsDetails';
//API
import { tmdbMovieIdAPI } from 'api/tmdbAPI';

const REVIEW_NOT = 'We don`t have any reviews for this movie';

export const Reviews = () => { 
    const { movieId } = useParams();
    const [reviewtObj, setReviewObj] = useState([]);

    useEffect(() => {
        const reviewsPromise = tmdbMovieIdAPI('movie', `${movieId}`, 'reviews');
        if (reviewsPromise) {
            reviewsPromise.then(value => {
                if (!value) return;
                setReviewObj(value.data.results);
            });    
        }
    }, [movieId]);


    return (
        <Section>
            <ul>
                {
                    (reviewtObj.length !== 0)
                        ? reviewtObj.map((reviewItem) => {
                    console.log(reviewItem);
                    return <ReviewsDetails reviewItem={reviewItem} key={reviewItem.id} />
                        })
                        : REVIEW_NOT
                }
            </ul>
        </Section>
    );
};