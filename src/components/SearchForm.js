import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form">
        
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Employee"
          id="search"
        />
       
      </div>
    </form>
  );
}

export default SearchForm;