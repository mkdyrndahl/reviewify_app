import React from "react";

function Admin_Movie(props) {
    return (
        <tr>
            <td><img src={props.image} alt={props.title} width="300" height="200" /></td>
            <td>{props.title}</td>
            <td>{props.genres}</td>
            <td>{props.length} minutes</td>
            <td>{props.director}</td>
            <td>{props.description}</td>
            <td><button className="btn btn-primary" onClick={props.editMovie} value={props.id}>Edit</button></td>
            <td><button className="btn btn-danger" onClick={props.deleteMovie} value={props.id}>Delete</button></td>
        </tr>
    );
}
export default Admin_Movie;