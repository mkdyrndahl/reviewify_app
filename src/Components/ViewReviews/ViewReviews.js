import React, { useEffect, useState } from "react";
import ReviewList from "../ReviewList/ReviewList"
import AddReview from "../AddReview/AddReview"
import {
    getReview,
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
    const [currentMovie, setCurrentMovie] = useState({});
    const [review, setReview] = useState({});
    const [rating, setRating] = useState(0);
    
    let { movieId } = useParams();

    calculateRating();

    useEffect(() => {
        
        fetchData();
    }, []);
  
    function fetchData(){
        getMovie(movieId).then(x => setCurrentMovie(x));
        getReview(movieId).then(x => setReviews(x));
        
    }

    async function likeOnReview(e) {
        const id = {"id": e.target.value};
        const result = await likeReview(id);
        fetchData();
    }

    async function dislikeOnReview(e) {
        const id = {"id": e.target.value};
        const result = await dislikeReview(id);
        fetchData();
    }

    async function addNewReview(e) {
        const newReview = {
            "movieID": movieId,
            "userID": props.user._id,
            "username": props.user.login,
            "description": review,
            "rating": rating
        }
        const result = await addReview(newReview);
        fetchData();
        calculateRating();   
    }

    function handleInputChange(e){
        setReview(e.target.value);
    }
    function handleRating(e){
        setRating(e.target.value);
    }

    function calculateRating(){
          var totalRate = 0;
          var noOfReviews = 0;
          reviews.forEach(review=>{
            if(review.movieID == currentMovie._id){
              totalRate += parseInt(review.rating);
              noOfReviews++;
            }
          })
          if(totalRate==0)
            currentMovie["rating"] = 0;
          else
            currentMovie["rating"] = parseFloat(totalRate/noOfReviews).toFixed(1);
      }

    return (
        <div>
            <ReviewList user={props.user} reviews={reviews} likeAction={likeOnReview} dislikeAction={dislikeOnReview} delete={deleteReview} 
            image={currentMovie.image}
            title={currentMovie.title}
            genres={currentMovie.genres}
            director={currentMovie.director}
            length={currentMovie.length}
            description={currentMovie.description}
            rating={currentMovie.rating}
            />

            {props.user.role !== '' ? <AddReview handleInputChange={handleInputChange} addReview={addNewReview} handleRating={handleRating} rating={rating}/> : <div/>}
        </div>
    )
}

export default ViewReviews;