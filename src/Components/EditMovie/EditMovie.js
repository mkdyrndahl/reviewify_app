import React from "react";

function EditMovie(props) {
    return (
        <form className="container w-50">
            <div className="mb-2">
                <label htmlFor="title" className="form-label">Movie Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    onChange={props.handleInputChange}
                    value={props.movie.title} />
            </div>
            <div className="mb-2">
                <label htmlFor="genres" className="form-label">Genres</label>
                <input
                    type="text"
                    className="form-control"
                    id="genres"
                    onChange={props.handleInputChange}
                    value={props.movie.genres} />
            </div>
            <div className="mb-2">
                <label htmlFor="director" className="form-label">Director</label>
                <input
                    type="text"
                    className="form-control"
                    id="director"
                    onChange={props.handleInputChange}
                    value={props.movie.director} />
            </div>
            <div className="mb-2">
                <label htmlFor="length" className="form-label">Length</label>
                <input
                    type="number"
                    className="form-control"
                    id="length"
                    onChange={props.handleInputChange}
                    value={props.movie.length} />
            </div>
            <div className="mb-2">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="decription"
                    onChange={props.handleInputChange}
                    value={props.movie.description} />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={props.handleImageChange}
                    onClick={props.resetInput}
                    value={props.movie.image.name} />
            </div>
            <input
                type="submit"
                className="btn btn-primary mb-4"
                onClick={props.updateMovie} value="Update Movie" />
        </form>
    );
}

export default EditMovie;
