import React, { Component } from "react";
import axios from "axios";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = event => {
    event.preventDefault();

    const fName = event.target.elements.Fname.value;
    const lName = event.target.elements.lname.value;
    const email = event.target.elements.email.value;
    const readyForPost = {
      lname: lName,
      fname: fName,
      email: email
    };
    this.add(readyForPost);
  };

  add = postItem => {
    axios
      .post(
        "http://5e030eb263d08b0014a28b76.mockapi.io/userapi/users",
        postItem
      )

      .catch(error => {
        console.log("error");
      });
  };

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <br></br>
          First name:<br></br>
          <input className="col-2" name="Fname"></input>
          <br></br>
          Last name:<br></br>
          <input className="col-2" name="lname"></input>
          <br></br>
          Mail:<br></br>
          <input className="col-2" name="email"></input>
          <br></br>
          <br></br>
          <input className="col-2" type="Submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
