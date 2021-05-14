import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "./utils/API";
import TableData from "./TableData";

class EmployeeContainer extends Component {
    state = {
      results: [],
      search: ""
    };
  
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.getEmployee(25);
    }

    getEmployee = query => {
        console.log(query);
        API.search(query)
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    };

        
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
        [name]: value
        });
    };
    sortname(){

    }
  // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.getEmployee(this.state.search);
        
    };
    render(){
       
        
        return(
            <div>
               <SearchForm
                search={this.state.search}
                
                handleInputChange={this.handleInputChange}

                />
                <TableData results={this.state.results} />
            </div>
        );
    }


}
export default EmployeeContainer;