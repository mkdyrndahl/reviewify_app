import React from 'react';

const SearchBar = (props) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     placeholder={"search for a movie"}

     onChange={props.updateInput}
    />
  );
}


export default SearchBar