import React from "react";
import Review from '../Review/Review'

function ReviewList(props) {
    
    return (
        <table className="table align-middle">
        <thead>
          <tr>
          <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Username</th>
            <th scope="col">Like</th>
            <th scope="col">Dislike</th>
          </tr>
        </thead>
        <tbody>
          {props.reviews.map((review, index) => (
            <Review
              key={review.username}
              movieID={review.movieID}
              image={review.image}
              title={review.title}
              description={review.description}
              username={review.username}
              likeRatio={review.likeRatio}
              like={props.like}
              dislike={props.dislike}
            />
          ))}
        </tbody>
      </table>
    )
}

export default ReviewList;