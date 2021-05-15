import React from "react";
import Moment from 'react-moment';

function TableData(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        {/* <th scope="col" onClick={props.sortName}>Name</th>
                        <th scope="col" onClick={props.sortPhone}>Phone</th>
                        <th scope="col" onClick={props.sortEmail}>Email</th>
                        <th scope="col" onClick={props.sortDob}>DOB</th> */}
                        <th scope="col" onClick={props.sortName} >Name</th>
                        <th scope="col" onClick={props.sortPhone}>Phone</th>
                        <th scope="col" >Email</th>
                        <th scope="col" >DOB</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {props.results.map(result => (
                        <tr key={result.index}>
                            <td><img alt="thumbnail" className="img-fluid" src={result.picture.thumbnail} /></td>
                            <td>{result.name.first + " " + result.name.last}</td>
                            <td>{result.phone}</td>
                            <td>{result.email}</td>
                            <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>
                        </tr>
                    ))}
                  
                        
                </tbody>
            </table>
        </div>
    );
}

export default TableData;