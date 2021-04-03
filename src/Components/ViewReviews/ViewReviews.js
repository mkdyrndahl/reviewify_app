import React, { useEffect } from "react";
import ReviewList from "../ReviewList/ReviewList"
import {
    getReviews,
    addReview,
    deleteReview,
    likeReview,
    dislikeReview
} from '../../Services/ReviewService'

function ViewReviews() {
    const [reviews, setReviews] = useState([])
    const [currentMovie, setCurrentMovie] = useState([])


    useEffect(()=> { 
        getReviews().then((json) => {
            setReviews(json)
        })
    }, [])



    return (
        <div>
            <ReviewList reviews={reviews} like={props.like} dislike={props.dislike} delete={props.delete}/>
        </div>
    )
}

export default ViewReviews;