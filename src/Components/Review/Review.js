import React from "react";
import { deleteReview } from "../../Services/ReviewService";


function Review(props) {
    let likeButton = null;
    let dislikeButton = null;
    let deleteButton = null;
    if (props.user.role !== '') {
        likeButton = <button className="btn btn-success mb-2" onClick={props.likeAction} value={props.id}>Like</button>;
        dislikeButton = <button className="btn btn-danger mb-2" onClick={props.dislikeAction} value={props.id}>Dislike</button>;
    }
    if (props.user.role === 'admin') {
        deleteButton = <button className="btn btn-danger" onClick={props.deleteAction} value={props.id}>Delete</button>;
    }

    return (
        <div>
            <h5 className="ps-3">- {props.username} -</h5>
            <div className="row">
                <div className="col-10 ps-5">
                <p>{props.description}</p>
                <div className="row">
                    <div className="col-1">{props.likes} likes</div>
                    <div className="col-2">{props.dislikes} dislikes</div>
                </div>
                </div>
                <div className="col-1 ms-5">
                    <div className="row">
                        {likeButton}
                        {dislikeButton}
                        {deleteButton}
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default Review;