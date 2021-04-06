import React from "react";
import Review from '../Review/Review'

function ReviewList(props) {
    return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading" style={{float: "left", padding: "20px"}}>
          <img src={props.image} alt={props.title} width="400" height="250" />
        </div>
        <div className="panel-body" style={{float: "middle-right", padding: "20px"}}>
        <h1 className="text-primary">{props.title}</h1>
        <h5>Rating: {props.rating}</h5>
        <p>Genres: {props.genres} </p>
        <p>Length: {props.length} minutes </p>
        <p>Director: {props.director}  </p>
        <p>{props.description}  </p>
        </div>
      </div>
      <h2 className="mt-3 ps-3">Reviews</h2>
      <hr></hr>
      {
      props.reviews.map((review, index) => (
        
            <Review
              id={review._id}
              user={props.user}
              key={index}
              description={review.description}
              username={review.username}
              likeRatio={review.likeRatio}
              likeAction={props.likeAction}
              dislikeAction={props.dislikeAction}
              likes={review.likes}
              dislikes={review.dislikes}
              deleteAction={props.deleteAction}
            />
          ))
          }
    </div>
    )
}

export default ReviewList;