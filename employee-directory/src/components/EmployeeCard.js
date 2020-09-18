import React, { Component } from "react";
import '../css/style.css';

class EmployeeCard extends Component {

  render() {
    // Deconstruction the props variables so that we can use them in our JSX
    const { order, image, name, phone, dob } = this.props

    return (
      <tr>
        <td className="idRow">{order}</td>
        <td className="imgRow"><img src={image} alt={name} /></td>
        <td className="nameRow">{name}</td>
        <td className="phoneRow">{phone}</td>
        <td className="dobRow">{dob}</td>
      </tr>
    )
  }
}

export default EmployeeCard;
