import React from "react";

function AddMovie(props) {
  return (
    
      <form className="container">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Movie Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genres" className="form-label">
            Genres
          </label>
          <input
            type="text"
            className="form-control"
            id="genres"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="director" className="form-label">
            Director
          </label>
          <input
            type="text"
            className="form-control"
            id="director"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="length" className="form-label">
            Length
          </label>
          <input
            type="number"
            className="form-control"
            id="length"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="decription"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={props.handleImageChange}
            onClick={props.resetInput}
            
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          onClick={props.addMovie} value="Add Movie"/>
          
      </form>
    
  );
}

export default AddMovie;
