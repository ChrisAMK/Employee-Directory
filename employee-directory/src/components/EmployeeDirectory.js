import React from "react";
import Header from "./Header";
import Search from "./Search";
import EmployeesTable from "./EmployeesTable";
import API from "../utils/API"


class EmployeeDirectory extends React.Component {

  // State is like a in Component Database
  state = {
    employees: [],
    query: '',
    sortedEmployees: [],
    sortType: ''
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

  // This function handles sorting Filtering by names
  filterNames = event => {
    const query = event.target.value;
    this.setState({query}, () => {
      let employeesList;

      // if there is any changed to the search value, the employeelist is now equal to sorted employees
      if (this.state.sortedEmployees.length > 0) {
        employeesList = this.state.sortedEmployees;
      } else {
        employeesList = this.state.employees;
      }

      // The the new table of employees is then mapped to New employee table
      const newEmployeeTable = employeesList.map(employee => {
        let name = employee.name.toLowerCase();

        if (name.indexOf(this.state.query.toLowerCase()) !== -1) {
          return {...employee, display: true}
        } else {
          return {...employee, display: false}
        }
      });

      // updating the state to the new Employee Table
      this.setState({
        employees: newEmployeeTable,
        sortedEmployees: newEmployeeTable
      });

    });
  }

  // Here we are sorting the names in ascending order or descending order
  sortNames = (employees) => {
    const sortType = this.state.sortType;

    // the sort type is desc or blank, we sort name and then set the sort type state to ascending
    if (sortType === 'desc' || sortType === '') {
      employees.sort(this.dynamicSort("name"));
      this.setState({
        sortedEmployees: employees,
        sortType: 'asc'
      });

    } else if (sortType === 'asc') {
      employees.sort(this.dynamicSort("-name"));
      this.setState({
        sortedEmployees: employees,
        sortType: 'desc'
      });
    }
  }

  // this helper function aids the sortNames function
  dynamicSort = property => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    // we are returning a binary result from localeCompare
    return function (a,b) {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    }
  }

  // Render function is what is within the rendered component
  render() {

    let employeesList;

    if (this.state.sortedEmployees.length > 0) {
      employeesList = this.state.sortedEmployees;
    } else {
      employeesList = this.state.employees;
    }

    let sortArrow;

    const sortState = this.state.sortType;

    if (sortState === 'asc') {
      //down arrow
      sortArrow = <span>&#9660;</span>;
      } else if (sortState === 'desc') {
      //up arrow
      sortArrow = <span>&#9650;</span>;
      } else {
      sortArrow = '';
    }
    
    return (
      <div className="container directoryContainer">
        <Header />
        <Search filterNames={this.filterNames} query={this.state.query}/>
        <EmployeesTable employees={employeesList} sortNames={this.sortNames} sortArrow={sortArrow}/>
      </div>
    );
  }
}

export default EmployeeDirectory;
