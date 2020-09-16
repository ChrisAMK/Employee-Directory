import React from "react";
import EmployeeCard from "./EmployeeCard"

class EmployeeTable extends React.Component {



    render(props) {
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        this.props.employees.map((employee, index) => (
                            <EmployeeCard 
                                key={index}
                                order={index + 1}
                                image={employee.image}
                                name={employee.name}
                                phone={employee.phone}
                                email={employee.email}
                                dob={employee.dob}
                            />
                        ))
                    }
                </tbody>
            </table>
        )
    }

}

export default EmployeeTable;