import React from "react"

function addReview(props)   {
    return(
    <div className="container w-100">
        
    <div className="md-2">
    <h2>Add a Review</h2>
        <label htmlFor="rating"><h5>Rating: {props.rating} </h5></label><br/>
        <input type="range" id="rating" className="form-range col-4" onChange={props.handleRating} min="0" max="5" value={props.rating}/><br/>
        <label htmlFor="description" className="form-label">
            <h5>Review</h5>
        </label>
        <textarea 
            rows="4"
            cols="50"
            className="form-control"
            id="description"
            onChange={props.handleInputChange}
      />
    </div>
    <br />
    <input
        type="submit"
        className="btn btn-primary mb-4"
        onClick={props.addReview} value="Add Review"/>
    </div>

)}

export default addReview