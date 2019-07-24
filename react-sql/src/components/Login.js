import React, {Component} from 'react';
import './components.css';

class Login extends Component {
  state = {
    users: [],
    user: {
        name: '',
        email: '',
        password: ''
    }
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

  addUser = _ => {
      const { user } =this.state;
      fetch(`http://localhost4000/users/add?name=${user.name}&email=${user.email}&password=${user.password}`)
        .then(this.getUsers)
        .catch(err => console.error(err))
    }

renderUser = ({userID, name, email, password}) => <div key={userID}> Full Name: {name} <br></br> Email: {email} <br> Password: {password}</br></div>

render () {
    const { users, user } = this.state;
    return (
        <div className="container">
            <div className="header">
                 <h1>Register</h1>
                 <hr></hr>
            </div>
          <div className="body">
            <h4>Enter your information in below to start manging your own team! </h4> <hr></hr>
            <input type="text" placeholder="Name"
                value={user.name}
                onChange={e => this.setState({ user: {...user, name: e.target.value}})}
            ></input><br></br>
            <input type="text" placeholder="Email"
                value={user.email}
                onChange={e => this.setState({ user: {...user, email: e.target.value}})}
            ></input><br></br>
            <input type="text" placeholder="Password"
                value={user.password}
                onChange={e => this.setState({ user: {...user, password: e.target.value}})}
            ></input><br></br>            
            <button onClick={this.addUser}>Add User</button> <br></br><hr></hr>
          </div>
        </div>
    );
  }
}

export default Login;