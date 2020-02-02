import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

export default class User extends Component {
  state = {
    error: false,
    users: null
  };

  getUser = () => {
    axios
      .get("http://5e030eb263d08b0014a28b76.mockapi.io/userapi/users")
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log("aaaaaaa");
        this.setState({ error: true });
      });
    console.log("aaaaaaa");
  };
  deleteUser = id => {
    axios
      .delete("http://5e030eb263d08b0014a28b76.mockapi.io/userapi/users/" + id)
      .then(res => {
        this.getUser();
      });
  };
  componentDidMount() {
    this.getUser();
    this.deleteUser();
  }

  render() {
    const { users, error } = this.state;
    console.log(this.props);

    if (error) return <div style={{ fontSize: 13 }}>error</div>;
    if (!users) return <div style={{ fontSize: 13 }}>loading...</div>;
    return (
      <div className=" container background2">
        <div className=" container ">
          <div className="row">
            <div>
              <br></br>
              <br></br>
            </div>
            <div className="col-1">ID</div>
            <div className="col-2">First Name</div>
            <div className="col-2">Last Name</div>
            <div className="col-5">Mail</div>

            <text className="col-2 ">
              <Link to="/add-user">AddUser</Link>
            </text>

            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        {users.map((user, index) => {
          return (
            <div className="w3-table-all w3-hoverable container background2">
              <div className="row ">
                <div className="col-1">{user.id}</div>
                <div className="col-2">{user.fname}</div>
                <div className="col-2">{user.lname}</div>
                <div className="col-4">{user.email}</div>
                <div className="col-1">
                  <h1
                    className="btn btn-danger "
                    onClick={event => this.deleteUser(user.id)}
                  >
                    delete
                  </h1>
                </div>
                <div className="col-1">
                  <button type="button" className="btn btn-info">
                    <Link to={`/user/${user.id}`} className="text-light">
                      Information
                    </Link>
                  </button>
                </div>

                <br></br>
                <br></br>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    );
  }
}
