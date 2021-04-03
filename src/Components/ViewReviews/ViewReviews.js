import React, { useEffect } from "react";
import ReviewList from "../ReviewList/ReviewList"


function ViewReviews(props) {
    const [reviews, setReviews] = useState([])
    const [currentMovie, setCurrentMovie] = useState([])
    

    useEffect(()=> { 
        getReviews()
    })


    return (
        <div>
            <ReviewList reviews={props.reviews} like={props.like} dislike={props.dislike}/>
        </div>
    )
}

export default ViewReviews;