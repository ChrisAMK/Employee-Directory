import React from "react";
import "../css/style.css";

class Search extends React.Component {
    render() {
        return (
            <div>
                <form className="searchForm">
                    <div className="form-group mb-2 searchDiv">
                        <label htmlFor="Search" className=" sr-only searchLabel">Search a Name</label>
                        <input type="text" className="form-control SearchInput" onChange={this.props.filterByName} placeholder="Search a name" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;