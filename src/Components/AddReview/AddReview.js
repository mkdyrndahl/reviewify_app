import React from "react"

function addReview(props)   {
    return(
    <div className="container w-100">
    <div className="md-2">
       <label htmlFor="description" className="form-label">
            Add a Review
        </label>
        <input
            type="text"
            className="form-control"
            id="description"
            /*onChange={props.handleInputChange}*/
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