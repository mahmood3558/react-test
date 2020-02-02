import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./componet/Users";
import UserInformation from "./componet/UserInformation";
import AddUser from "./componet/AddUser";
import { Route, Link } from "react-router-dom";
import UserEdit from "./componet/UserEdit";

const add = () => (
  <div>
    <AddUser></AddUser>;
  </div>
);

const users = () => (
  <div>
    <Users></Users>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="background1">
        <div className="App">
          <div className="col-md-4 offset-md-4">
            <br></br>
            <button className="col-12" to="/users">
              <Link to={`/users`}>Users</Link>
            </button>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <Route path="/add-user" component={add}></Route>
          <Route path="/users" exact component={users}></Route>
          <Route
            path="/user/:id"
            render={param => <UserInformation {...param} />}
          ></Route>
          <Route
            path="/edit-user/:id"
            render={param => {
              return <UserEdit {...param} />;
            }}
          ></Route>
          <header>
            <br></br>
            <title>Users</title>
            <br></br>
          </header>
          <br></br>
        </div>
      </div>
    );
  }
}

export default App;
