import React from "react";
import Review from '../Review/Review'

function ReviewList(props) {
    
    return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading" style={{float: "left"}}>
          <img src={props.image} alt={props.title} width="300" height="200" />
        </div>
        <div className="panel-body" style={{float: "middle-right", padding: "20px"}}>
        <h1>{props.title} Hello</h1>
        </div>
      </div>
        <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User's Comments</th>
            <th scope="col">Username</th>
            <th scope="col">Like Ratio</th>
            <th scope="col">Like Post</th>
            <th scope="col">Dislike Post</th>
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
    </div>
    )
}

export default ReviewList;