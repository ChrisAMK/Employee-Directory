import React from "react";
import EmployeeCard from "./EmployeeCard";
import '../css/style.css';

class EmployeeTable extends React.Component {

    // here we are checking if the component is ready to be displayed, when ready we return the EmployeeCard component
    renderEmployee = (employee, index) => {
        let displayed;

        if (employee.display === undefined) {
            displayed = true;
        } else {
            displayed = employee.display;
        }

        if (displayed === true) {
            return (
                <EmployeeCard 
                    key={index}
                    order={index + 1}
                    image={employee.image}
                    name={employee.name}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob}
                />
            );
        }

    }


    // Inside this component we are setting the Heading and then adding EmployeeCards for each iteration of the Employees that are in the Props
    render() {
        return (
            <div className="row">
                <table className="tableHead col-12 col-sm-12 col-md-12 col-lg-12">
                    <thead className="">
                        <tr className="rowHeading">
                            <th>#id</th>
                            <th>Image</th>
                            <th title="Sort By Name" onClick={() => this.props.sortNames(this.props.employees)}>Name {this.props.sortArrow}</th>
                            <th>Phone</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {   
                            this.props.employees.map((employee, index) => (
                                this.renderEmployee(employee, index)
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;