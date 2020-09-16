import React, { Component } from "react";

class EmployeeCard extends Component {

  render(props) {

    const { order, image, name, phone, email, dob } = this.props

    return (
      <tr>
        <td>{order}</td>
        <td><img src={image} alt={name} /></td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob}</td>
      </tr>
    )
  }
}

export default EmployeeCard;
