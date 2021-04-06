import React from "react";
import { Link } from 'react-router-dom';

function Movie(props) {
    return (
        <tr>
            <td><img src={props.image} alt={props.title} width="300" height="200" /></td>
            <td><Link to={`/review/${props.id}`}>{props.title}</Link></td>
            <td>{props.rating}</td>
            <td>{props.genres}</td>
            <td>{props.length} minutes</td>
            <td>{props.director}</td>
            <td>{props.description}</td>
        </tr>
    );
}
export default Movie;