import React from "react"

function addReview(props)   {
      
    <div className="container w-50">
    <div className="md-2">
       <label htmlFor="description" className="form-label">
            Description
        </label>
        <input
            type="text"
            className="form-control"
            id="description"
            onChange={props.handleInputChange}
      />
    </div>
    <input
        type="submit"
        className="btn btn-primary mb-4"
        onClick={props.addReview} value="Add Review"/>
    </div>
}

export default addReview