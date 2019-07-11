import React from "react";
import './components.css';


export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                 <div className="row">
                     <div className="col">
                    <h1>Home</h1>
                    <hr></hr>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col">
                         <br></br>
                        <h2>What is it?</h2> 
                        <p>Fantasy volleyball is a way to be more engaged with collegiate athletes. Get together with a group of friends to battle against one another to see who is the smartest volleyball player there is. Create and manage your own teams of players from around the U.S. to lead your Fantasy team to victory!</p>
                     </div>
                     <div className="col">
                     <br></br>
                         <h2>How can I play?</h2>
                         <p2>Simple: Once you click on the Profile page you can start managing your team. Be sure to keep an eye out on those scores and ranks, as they truly make a difference in your team. Head on over to the Profile page to get started.</p2>
                     </div>
                 </div>
                 <br></br>
                 <div className="row">
                     <div className="col">
                     <br></br>
                        <h3>What are player scores?</h3>
                        <p3>Each athlete will have their overall stats plus their overall score and rank. Each positive action results points being added and each negative action results in points being taken from their overall score. Add the players with the most points to your team to increase your chances of winning!</p3>
                     </div>
                     <br></br>
                 <div className="col">
                     <img src="./volleyball.ico" alt="volleyball" class="rounded-float-right"></img>
                 </div>
                 </div>
            </div>
        </div>
        );
    }
}



export default Home;
