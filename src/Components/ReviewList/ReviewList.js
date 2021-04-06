import React from "react";
import Review from '../Review/Review'

function ReviewList(props) {
    
    return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading" style={{float: "left", padding: "20px"}}>
          <img src={props.image} alt={props.title} width="300" height="200" />
        </div>
        <div className="panel-body" style={{float: "middle-right", padding: "20px"}}>
        <h1>{props.title /*Remove name/genre/director... text once data works*/ } Name</h1>
        <h4>{props.rating} stars </h4>
        <p>{props.genre} Genre </p>
        <p>{props.length} minutes </p>
        <p>{props.director} Director </p>
        </div>
      </div>
        <table className="table align-middle">
        <thead>
          <tr>
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
              user={props.user}
              key={review.username}
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