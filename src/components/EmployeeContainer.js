import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
      result: {},
      search: ""
    };
  
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.getEmployee(20);
    }

    getEmployee = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data.result }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
        [name]: value
        });
    };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };

}
export default EmployeeContainer;