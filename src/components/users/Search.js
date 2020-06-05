import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            autoComplete="off"
            onChange={this.onChange}
          />
        </form>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </div>
    );
  }
}

export default Search;
