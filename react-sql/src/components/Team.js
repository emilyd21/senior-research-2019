import React, {Component} from 'react';
import './components.css';

class Team extends Component {
  state = {
    players: [],
    teams: []
  }

  componentDidMount() {
    this.getPlayers();
    this.getTeams();
  }

  getPlayers = _ => {
    fetch(`http://localhost:4000/players`)
    .then(response => response.json())
    .then(response => this.setState({ players : response.data}))
    .catch(err => console.log(err))
  }

  getTeams = _ => {
    fetch(`http://localhost:4000/fantasyTeam`)
    .then(response => response.json())
    .then(response => this.setState({ teams : response.data}))
    .catch(err => console.log(err))
  }

renderPlayer = ({player_id, name, score}) => <div key={player_id}>{name} has a total of {score} points. <br></br><hr></hr></div>
renderTeam = ({fTeamID, name, wins, losses, userID}) => <div key={fTeamID}>{name} have a record of {wins}-{losses}. The user has an ID of {userID}. <br></br><hr></hr></div>

render () {
    const { players, player } = this.state;
    const { teams, team } = this.state;

    return (
        <div className="container">
        <div className="header">
            <h1>Team</h1>
            <hr></hr>
        </div>
        <div className="col">
            <h4>Overall Rankings: </h4><hr></hr>
             <div className="row">
                 <p3>{players.map(this.renderPlayer)} <hr></hr>
                 </p3>
            </div>
        </div>
        <div className="col">
            <h4>Team Ranks: </h4><hr></hr>
             <div className="row">
                 <p3>{teams.map(this.renderTeam)} <hr></hr>
                 </p3>
            </div>
        </div>
    </div>
    );
  }
}

export default Team;

