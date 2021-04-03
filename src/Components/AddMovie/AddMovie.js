import React from "react";

function AddMovie(props) {
    return (
        <div className="container w-50">
            <div className="mb-2">
                <label htmlFor="title" className="form-label">Movie Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    onChange={props.handleInputChange} />
            </div>
            <div className="mb-2">
                <label htmlFor="genres" className="form-label">Genres</label>
                <input
                    type="text"
                    className="form-control"
                    id="genres"
                    onChange={props.handleInputChange} />
            </div>
            <div className="mb-2">
                <label htmlFor="director" className="form-label">Director</label>
                <input
                    type="text"
                    className="form-control"
                    id="director"
                    onChange={props.handleInputChange} />
            </div>
            <div className="mb-2">
                <label htmlFor="length" className="form-label">Length</label>
                <input
                    type="number"
                    className="form-control"
                    id="length"
                    onChange={props.handleInputChange} />
            </div>
            <div className="mb-2">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="decription"
                    onChange={props.handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={props.handleImageChange}
                    onClick={props.resetInput} />
            </div>
            <button className="btn btn-primary mb-4" onClick={props.addMovie}>Add movie</button>
        </div>
    );
}

export default AddMovie;
