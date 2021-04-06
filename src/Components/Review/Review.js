import React from "react";


function Review(props) {
    return (
        <tr>
            <td>{props.description}</td>
            <td>{props.username}</td>
            <td>{props.likeRatio /* 21 Likes : 5 Dislikes */}</td>
            <td><button className="btn btn-success" onClick={props.like} value={props.movieID}>Like</button></td>
            <td><button className="btn btn-danger" onClick={props.dislike} value={props.movieID}>Dislike</button></td>
        </tr>
    );
}

export default Review;