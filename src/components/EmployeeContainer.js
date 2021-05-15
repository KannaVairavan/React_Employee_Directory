import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "./utils/API";
import TableData from "./TableData";

class EmployeeContainer extends Component {
    state = {
      results: [],
      search: "",
      ascending:true,
      resultsforDisplay:[]

    };
  
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.getEmployee(25);
    }

    getEmployee = query => {
        console.log(query);
        API.search(query)
        .then(res => this.setState({ 
            
            results: res.data.results,
            resultsforDisplay: res.data.results 

        }))
        .catch(err => console.log(err));
    };

    searchEmployee=()  =>{
        console.log(this.state.results);
        const searchedEmployee=this.state.results.filter((employee)=>{
            let fullName= employee.name.first + " " + employee.name.last;

            return(fullName.includes(this.state.search));
        })
        console.log("Searched Employee is ", searchedEmployee)
        this.setState({
            resultsforDisplay:searchedEmployee
        })
    }  
    handleInputChange = event => {
        const value = event.target.value;
        console.log("handleInputChange value",value);
      
        this.setState({search: value},()=>this.searchEmployee());
    };
    
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
                handleFormSubmit={this.handleFormSubmit}

                />
                <TableData results={this.state.resultsforDisplay} />
            </div>
        );
    }


}
export default EmployeeContainer;