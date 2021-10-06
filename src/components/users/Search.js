import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  // onChange = (e) => {
  //   this.setState({ text: e.target.value });
  // };

  // do above or if you have a form with many fields: email, text, etc and dont want a separate onChange for each one, you can use whatever the name: is, by using [] and the name as a key

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
