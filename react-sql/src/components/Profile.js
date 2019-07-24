import React, {Component} from 'react';
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

renderUser = ({userID, name, email}) => <div key={userID}> ID: {userID} <br></br>Name: {name} <br></br>Email: {email} <hr></hr></div>

render () {
    const { users, user } = this.state;
    return (
<div className="container">
<div className="header">
    <h1>Profile</h1>
    <hr></hr>
</div>
<div className="body">
    <h4>Current Users:</h4><hr></hr>
    <p3>{users.map(this.renderUser)} </p3> 
</div>
</div>
    );
  }
}

export default Profile;






