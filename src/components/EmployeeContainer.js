import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "./utils/API";
import TableData from "./TableData";
import HeaderSection from "./Header"

class EmployeeContainer extends Component {
    state = {
      results: [],
      search: "",
      sortedBy:"",
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


    
  

    sortName=(event)=>{
        event.preventDefault();
        let sortedEmployee;
        console.log(this.state.sortedBy);
        if (this.state.sortedBy ==="") {
            this.setState({ sortedBy: "ascending" })
            sortedEmployee=this.state.results.sort((a,b)=>
            a.name.first < b.name.first ? -1:1
            );
        }
        else if (this.state.sortedBy ==='descending'){
            this.setState({ sortedBy: "ascending" })
            sortedEmployee=this.state.results.sort((a,b)=>
            a.name.first < b.name.first ? -1:1
            );

        }
        else {
            this.setState({ sortedBy: "descending" })
            sortedEmployee=this.state.results.sort((a,b)=>
            a.name.first >b.name.first ? -1:1
            );
        }
        this.setState({
            results:sortedEmployee
        })
    }

    
        
    
    render(){
       
        
        return(
            <div>
               <HeaderSection/>
               <SearchForm
                value={this.state.search}
                
                handleInputChange={this.handleInputChange}
                

                />
                <TableData 
                results={this.state.results} 
                sortName={this.sortName} 
                // sortPhone={this.sortPhone}
                // sortEmail={this.sortEmail}
                // sortDob={this.sortDob}
                
                />
            </div>
        );
    }


}
export default EmployeeContainer;