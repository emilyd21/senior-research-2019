import React, {Component} from 'react';
import {render} from "react-dom";

import './components.css';

class Team extends Component {
  state = {
    players: [],
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = _ => {
    fetch(`http://localhost:4000/players`)
    .then(response => response.json())
    .then(response => this.setState({ players : response.data}))
    .catch(err => console.log(err))
  }

renderPlayer = ({player_id, name, score}) => <div key={player_id}>{name} has a total of {score} points. <br></br><hr></hr></div>

render () {
    const { players, player } = this.state;
    return (
        <div className="container">
        <div className="header">
            <h1>Team</h1>
            <hr></hr>
        </div>
        <div className="col">
            <h4>Player scores: </h4> <br></br>
             <div className="row">
                 <p3>{players.map(this.renderPlayer)} <hr></hr>
                 </p3>
            </div>
        </div>
    </div>
    );
  }
}

export default Team;

