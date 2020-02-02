import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

export default class AddUser extends Component {
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

  edit = postItem => {
    console.log("end");

    axios
      .put(
        "http://5e030eb263d08b0014a28b76.mockapi.io/userapi/users/" +
          this.state.id,
        postItem
      )
      .catch(error => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getUser();
    this.edit();
  }

  submitHandler = event => {
    event.preventDefault();

    const fName = event.target.elements.Fname.value;
    const lName = event.target.elements.lname.value;
    const id = event.target.elements.uid.value;
    const email = event.target.elements.email.value;
    const readyForPost = {
      id: id,
      lname: lName,
      fname: fName,
      email: email
    };

    this.edit(readyForPost);
  };

  componentDidMount() {}

  render() {
    const { users, error } = this.state;

    // if (error) return <div style={{ fontSize: 13 }}>error</div>;
    // if (!users) return <div style={{ fontSize: 13 }}>loading...</div>;
    // const Users = () => (
    //   <div>
    //     <Users></Users>
    //   </div>
    // );

    // const goUsers = () => <Link to={`/users`}>Users</Link>;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          Id:<br></br>
          <input
            className="button-input"
            name="uid"
            value={this.state.id}
          ></input>
          <br></br>
          First name:<br></br>
          <input className="buttom-input " name="Fname">
            {/* {users.fname} */}
          </input>
          <br></br>
          Last name:<br></br>
          <input className="buttom-input " name="lname">
            {/* {users.lname} */}
          </input>
          <br></br>
          Mail:<br></br>
          <input className="buttom-input " name="email">
            {/* {users.email} */}
          </input>
          <br></br>
          <br></br>
          <button
            className="buttom-input "
            onClick="goUsers()"
            type="Submit"
            value="Update"
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}
