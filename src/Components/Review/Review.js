import React from "react";


function Review(props) {
    return (
        <tr>
            <td><img src={props.image} alt={props.title} width="300" height="200" /></td>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.username}</td>
            <td>{props.likeRatio /* 21 Likes : 5 Dislikes */}</td>
            <td><button className="btn btn-success" onClick={props.like} value={props.likeCount}>Like</button></td>
            <td><button className="btn btn-danger" onClick={props.dislike} value={props.dislikeCount}>Dislike</button></td>
        </tr>
    );
}
export default Review;