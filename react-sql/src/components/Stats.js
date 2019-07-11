import React, {Component} from 'react';
import {render} from "react-dom";

import './components.css';

class Stats extends Component {
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

renderPlayer = ({player_id, name, kills, assists, errors, digs, aces, blocks}) => <div key={player_id}> {name} <br></br> aces: {aces} <br></br> kills: {kills} <br></br>digs: {digs} <br></br>blocks: {blocks} <br></br>assists: {assists} <br></br>errors: {errors} <br></br><hr></hr></div>

render () {
    const { players, player } = this.state;
    return (
        <div className="container">
        <div className="header">
            <h1>Stats</h1>
            <hr></hr>
        </div>
        <div className="col">
            <h4>Player statistics: </h4> <br></br>
             <div className="col">
                 <p4>{players.map(this.renderPlayer)} <hr></hr>
                 </p4>
            </div>
        </div>
    </div>
    );
  }
}

export default Stats;

