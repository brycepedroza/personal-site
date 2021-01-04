import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", platform: "" };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "https://getform.io/f/d709b72b-d30b-4316-9cc1-4d1d33778a8b",
        this.state,
        { headers: { Accept: "application/json" } }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" required="required">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required="required"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="platform">Favourite Platform</label>
            <select
              className="form-control"
              id="platform"
              required="required"
              name="platform"
              onChange={this.handleChange}
            >
              <option>Github</option>
              <option>Gitlab</option>
              <option>Bitbucket</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
