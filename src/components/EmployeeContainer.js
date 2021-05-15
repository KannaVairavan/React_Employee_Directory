import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "./utils/API";
import TableData from "./TableData";
import HeaderSection from "./Header"

class EmployeeContainer extends Component {
    state = {
      results: [],
      search: "",
      sortedBy:"ascending",
    //   resultsforDisplay:[]

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
      
        const searchedEmployee=this.state.results.filter((employee)=>
        employee.name.first.startsWith(`${value}`))

        this.setState({
            search: value,
            results:searchedEmployee
        });
        
    };


    
  // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        
    };

    sortName=(event)=>{
        event.preventDefault();
        let sortedEmployee;
        if (this.state.sortedBy ==='ascending'){
            sortedEmployee=this.state.results.sort((a,b)=>
            a.name.first > b.name.first ? 1:-1
            );
        }else {
            sortedEmployee=this.state.results.sort((a,b)=>
            a.name.first < b.name.first ? 1:-1
            );
        }
        this.setState({
            results:sortedEmployee
        })
    }

    sortPhone=(event)=>{
        event.preventDefault();
        let sortedByPhone;
        if (this.state.sortedBy ==='ascending'){
            sortedByPhone=this.state.results.sort((a,b)=>
            a.phone.first > b.name.phone ? 1:-1
            );
        }else {
            sortedByPhone=this.state.results.sort((a,b)=>
            a.name.phone < b.name.phone ? 1:-1
            );
        }
        this.setState({
            results:sortedByPhone
        })
    }
        
    
    render(){
       
        
        return(
            <div>
               <HeaderSection/>
               <SearchForm
                value={this.state.search}
                
                handleInputChange={this.handleInputChange}
                // handleFormSubmit={this.handleFormSubmit}

                />
                <TableData results={this.state.results} sortName={this.sortName} sortPhone={this.sortPhone}/>
            </div>
        );
    }


}
export default EmployeeContainer;