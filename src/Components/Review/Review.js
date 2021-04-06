import React from "react";


function Review(props) {
    let likeButton = null;
    let dislikeButton = null;
    if (props.user.role !== '') {
        likeButton = <button className="btn btn-success" onClick={props.like} value={props.movieID}>Like</button>;
        dislikeButton = <button className="btn btn-danger" onClick={props.dislike} value={props.movieID}>Dislike</button>;
    }

    return (
        <tr>
            <td>{props.description}</td>
            <td>{props.username}</td>
            <td>{props.likeRatio /* 21 Likes : 5 Dislikes */}</td>
            <td>{likeButton}</td>
            <td>{dislikeButton}</td>
        </tr>
    );
}

export default Review;