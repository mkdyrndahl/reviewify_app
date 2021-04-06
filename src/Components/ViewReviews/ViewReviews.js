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
            <ReviewList user={props.user} reviews={reviews} like={likeOnReview} dislike={dislikeOnReview} delete={deleteReview} />
            {props.user.role !== '' ? <AddReview  /> : <div/>}
        </div>
    )
}

export default ViewReviews;