import React, { useEffect, useState } from "react";
import ReviewList from "../ReviewList/ReviewList"
import AddReview from "../AddReview/AddReview"
import {
    getReviews,
    addReview,
    deleteReview,
    getReviewRatio,
    likeReview,
    dislikeReview
} from '../../Services/ReviewService'
import { useParams } from "react-router";
import { getMovie } from "../../Services/MovieService";

function ViewReviews(props) {
    const [reviews, setReviews] = useState([])
    const [currentMovie, setCurrentMovie] = useState([]);
    let { movieId } = useParams();
    useEffect(() => {
        getMovie(movieId).then(x => setCurrentMovie(x));
        getReviews(movieId).then(x => setReviews(x));
    }, []);

    const user = props.user
    

    useEffect(()=> { 
        getReviews(movieId).then((json) => {
            setReviews(json)
        }).then(console.log(reviews))
        
    }, [])

    /* how to find current movie?*/

    /*async function getLikeRatio(reviews) {
        await getReviewRatio(reviews)
    }*/

    async function likeOnReview(e) {
        const result = await likeReview(e.target.value)

    }

    async function dislikeOnReview(e) {
        const result = await dislikeReview(e.target.value)

    }

    async function addOnReview(e) {
        await addReview(currentMovie)

    }

    async function deleteReview(e) {

    }

    return (
        <div>
            <ReviewList reviews={reviews} like={likeOnReview} dislike={dislikeOnReview} delete={deleteReview} />
            <h1>movieId: {movieId}</h1>
        </div>
    )
}

export default ViewReviews;