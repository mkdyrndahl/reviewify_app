import React from "react";

function AddMovie(props) {
  return (
    <div className="col-6 container">
      <h1>Add Movie</h1>
      <table className="table">
          <tbody>
        <tr>
          <td>Title:</td>
          <td>
            <input type="text" id="title" onChange={props.handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Genres:</td>
          <td>
            <input type="text" id="genres" onChange={props.handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Director:</td>
          <td>
            <input type="text" id="director" onChange={props.handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Length:</td>
          <td>
            <input type="number" id="length" onChange={props.handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>
            <input type="textarea" id="description" onChange={props.handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Image:</td>
          <td>
            <input
              id="image"
              type="file"
              className="file-upload"
              onChange={props.handleInputChange}
            />
          </td>
          
        </tr>
        </tbody>
      </table>
      <img className="text-center" src={props.image} alt=""/><br/>
      <button className="btn btn-primary" onClick={props.addMovie}>Add Movie</button>
    </div>
  );
}

export default AddMovie;
