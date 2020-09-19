import React from "react";
import "../css/style.css";

class Header extends React.Component {

    render(props) {

        return (
            <div>
                <h1 className="header">Employee Directory</h1>
                <h6 className="desc">Search for an Employee Below</h6>
            </div>
        )
    }
}

export default Header