import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filterSongs(this.state.filterTerm);
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Filter Songs"
          aria-label="Search"
          name="filterTerm"
          value={this.state.filterTerm}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
