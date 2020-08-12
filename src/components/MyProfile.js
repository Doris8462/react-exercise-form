import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    name: "",
    email: "",
    gender: "Male",
    checked: true,
  };

  handleChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };
  handleCheckboxChange = (event) => {
    this.setState({
      checked: event.target.checked,
    });
  };
  handleSubmit = (event) => {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  };
  render() {
    return (
      <div className="myProfile">
        <h2>My Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              placeholder="Your name"
              onChange={(event) => this.handleChange("name", event)}
            />
          </div>

          <div className="form-element">
            <label htmlFor="gender">Gender</label>
            <select
              type="radio"
              value={this.state.gender}
              onChange={(event) => this.handleChange("gender", event)}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-element">
            <label htmlFor="description">Description</label>
            <textarea
              value={this.state.description}
              placeholder="Description about yourself"
              onChange={(event) => this.handleChange("description", event)}
            ></textarea>
          </div>

          <div className="form-element">
            <input
              type="checkbox"
              className="checkBox"
              checked={this.state.checked}
              onChange={(event) => this.handleCheckboxChange(event)}
            />
            <a>I have read the terms of conduct</a>
          </div>

          <input
            className="submitButtom"
            type="submit"
            value="submit"
            disabled={
              !this.state.name ||
              !this.state.gender ||
              !this.state.description ||
              !this.state.checked
            }
          />
        </form>
      </div>
    );
  }
}

export default MyProfile;
