import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

export default class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      users: null,
      id: this.props.match.params.id
    };
  }

  getUser = () => {
    axios
      .get(
        "http://5e030eb263d08b0014a28b76.mockapi.io/userapi/users/" +
          this.state.id
      )
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };
  componentDidMount() {
    this.getUser();
  }

  render() {
    const { users, error } = this.state;

    if (error) return <div style={{ fontSize: 13 }}>error</div>;
    if (!users) return <div style={{ fontSize: 13 }}>loading...</div>;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          ID:<br></br>
          <button className="button-input col-2">{users.id}</button>
          <br></br>
          fname:<br></br>
          <button className="button-input col-2">{users.fname}</button>
          <br></br>
          lname:<br></br>
          <button className="button-input col-2">{users.lname}</button>
          <br></br>
          email:<br></br>
          <button className="button-input col-2">{users.email}</button>
          <br></br>
          <br></br>
          <button type="button" className="text-dark">
            <Link to={`/edit-user/${users.id}`} className=" text-dark ">
              Edit
            </Link>
          </button>
        </form>
      </div>
    );
  }
}
