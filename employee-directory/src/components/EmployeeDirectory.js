import React from "react";
import Header from "./Header";
import Search from "./Search";
import EmployeesTable from "./EmployeesTable";
import API from "../utils/API"


class EmployeeDirectory extends React.Component {

  // State is like a in Component Database
  state = {
    employees: []
  }

  // The ComponentDidMount Function is invoked immediately after the component is mounted, mounting is what we call when the Component
  // Is first added to the DOM
  componentDidMount() {
    this.getEmployees();
  }

  // Here we are registering a function that will use the API method to perform a get request to retrieve the employee data list
  getEmployees() {
    API.getEmployees()
    .then(res => {
      // Once we have the data we are passing it to another function that will map each result into a new list
      this.generateNewEmployeeList(res.data.results);
    })
    .catch(err => console.log(err));
  }

  // For every employee passed in as a parameter we are mapping each to a variable called newEmployeeList
  generateNewEmployeeList = (employees) => {
    const newEmployeeList = employees.map((employee => {
      return (
        {
          dob: employee.dob.date,
          email: employee.dob.email,
          name: `${employee.name.first} ${employee.name.last}`,
          phone: employee.phone,
          image: employee.picture.large
        }
      )
    }))

    this.setState({ employees: newEmployeeList })
  }



  render() {
    
    return (
      <>
        <Header />
        <Search />
        <EmployeesTable employees={this.state.employees}/>
      </>
    );
  }
}

export default EmployeeDirectory;
