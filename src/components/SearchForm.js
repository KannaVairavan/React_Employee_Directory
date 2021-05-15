import React from "react";

function SearchForm(props) {
  return (
    <div className="searchbox">
      <br></br>
      
              <form>
                <div className="form-group">
               
                  <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for a employee name"
                    id="search"
                  />
                
                </div>
              </form>
            
        <br></br>
    </div>
  );
}

export default SearchForm;