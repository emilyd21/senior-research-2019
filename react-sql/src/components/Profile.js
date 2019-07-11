import React, {Component} from 'react';
import {render} from "react-dom";

import './components.css';

class Profile extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch(`http://localhost:4000/users`)
    .then(response => response.json())
    .then(response => this.setState({ users : response.data}))
    .catch(err => console.log(err))
  }

renderUser = ({user_id, name, email}) => <div key={user_id}> UserID: {user_id} <br></br>Name: {name} <br></br> Email: {email}.</div>

render () {
    const { users, user } = this.state;
    return (
<div className="container">
<div className="header">
    <h1>Profile</h1>
    <hr></hr>
</div>
<div className="body">
    <p>Thanks so much for playing and helping collegiate athletes get a larger fan-base! :)</p> <br></br><hr></hr>
    <p3>{users.map(this.renderUser)} </p3> 
</div>
</div>
    );
  }
}

export default Profile;






