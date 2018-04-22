import React, { Component } from 'react';
import './App.css';
import Randomize from './components/randomize';
import Events from './components/events';
import ParticipantBox from './components/participantComponents/participantBox';
import TeamBox from './components/team/teamBox';

import Connector from './helpers/connector';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selectedEvent: null,
    selectedParticipant: null,
    selectedPlayer:null,
    refereeIncluded: false,
    minute: 0,
    participants: []}
}

  //Den her kaldes EFTER component er mounted.
  componentDidMount() {
    fetch('/participants')
      .then(res => res.json())
      .then(participants => this.setState({participants}));

  }

  render() {
    console.log(this.state.participants);
    return (
      <div className="App">
              <br/>
        <div className="flex-grid">
        <div>
          <ul>
            {this.state.participants.map(participant =>
            <li key={participant.id}>{participant.name}</li>)}
          </ul>
        </div>
          <div className="col leftCol" >
            <Events onOptionChange={this.onEventChange.bind(this)} selectedOption={this.state.selectedEvent}/>
          </div>
          <div className="col">
         <TeamBox onChange={this.onPlayerChange.bind(this)} selectedPlayer={this.state.selectedPlayer}/>
         </div>
          <div className="col">
            <Randomize selectedEvent={this.state.selectedEvent} selectedPlayer={this.state.selectedPlayer} onClick={this.onClickRandomize.bind(this)}/>
          </div>
        </div>
        <div className="flex-grid">
        <br/>
        </div>

        <div className="flex-grid">
          <ParticipantBox addParticipant={this.addParticipant} participants={this.state.participants}/>
        </div>
        <br/>


      </div>
    );
  }

  onClickRandomize(e) {
    var selectedEvent = this.state.selectedEvent;
    var selectedPlayer = this.state.selectedPlayer;
    var randomizerResult = Connector.randomize(selectedEvent, selectedPlayer);
    this.updateWhatToDrink(randomizerResult);
  }

  updateWhatToDrink(randomizerResult) {
    console.log('In here we update the fields for each participant.');
    console.log(randomizerResult);
    /*Jeg vil gerne kunne hive key-value pair ud af arrayet.
    Key skal bruges til at slå op i document.getElementById og value skal bruges til at sætte
    værdien for hvad deltagerne skal drikke.
    */
    for (var i = 0; i < randomizerResult.length; i++) {
      console.log(randomizerResult[i].status);
      document.getElementById(randomizerResult[i].status).value = randomizerResult[i].value;
    }
  }

  onEventChange(e) {
    this.setState({selectedEvent:e.target.value});
  }

  onParticipantChange(e) {
    this.setState({selectedParticipant:e.target.value});
  }

  onPlayerChange(e) {
    console.log('hej');
    console.log(e.target.value);
    this.setState({selectedPlayer:e.target.value});
  }

  onRefereeToggle(e) {
    const newState = !this.state.refereeIncluded;
    this.setState({refereeIncluded:newState})

    console.log(newState);
  }

  onSetNumberOfParticipants(e) {
    console.log(e.target.value);
  }

  addParticipant(e) {
    console.log('hello');
  }
}


export default App;
