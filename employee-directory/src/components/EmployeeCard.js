import React from "react";
import '../css/style.css';

class EmployeeCard extends React.Component {

  formatDate = () => {
    const dateString = this.props.dob.toString();
    const yearEnd = dateString.indexOf('-');
    const year = dateString.substring(0, yearEnd);
    const monthEnd = dateString.indexOf('-', yearEnd + 1);
    let month = dateString.substring(yearEnd + 1, monthEnd);
    month = (month.substr(0, 1) === '0') ? month.substr(1) : month;
    let day = dateString.substr(monthEnd + 1, 2);
    day = (day.substr(0, 1) === '0') ? day.substr(1) : day;

    return `${day}-${month}-${year}`;
    
}

  render() {
    // Deconstruction the props variables so that we can use them in our JSX
    const { order, image, name, phone } = this.props

    return (
      <tr>
        <td className="idRow">{order}</td>
        <td className="imgRow"><img src={image} alt={name} /></td>
        <td className="nameRow">{name}</td>
        <td className="phoneRow">{phone}</td>
        <td className="dobRow">{this.formatDate()}</td>
      </tr>
    )
  }
}

export default EmployeeCard;
