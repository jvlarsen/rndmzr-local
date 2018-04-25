import React, { Component } from 'react';
import './App.css';
import Randomize from './components/randomize';
import Events from './components/events';
import ParticipantBox from './components/participantComponents/participantBox';
import TeamBox from './components/team/teamBox';
import Connector from './helpers/connector';
import ElementsHelper from './helpers/elementsHelper';
import Engine from './helpers/randomizer';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selectedEvent: null,
    selectedParticipant: null,
    selectedPlayer:null,
    refereeIncluded: false,
    minute: 0,
    numberOfParticipants: 0,
  }
}

  render() {
    return (
      <div className="App">
              <br/>
        <div className="flex-grid">
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
          <ParticipantBox participantAdded={this.participantAdded.bind(this)}/>
          <input type='button' onClick={this.allocatePlayers} value='Fordel holdene' />
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

  allocatePlayers = () => {
    Engine.allocatePlayers(this.state.numberOfParticipants);
  }

  participantAdded = () => {
    var current = this.state.numberOfParticipants;
    current++;
    this.setState({numberOfParticipants:current});
  }

  updateWhatToDrink(randomizerResult) {
    randomizerResult.map(result => {
      ElementsHelper.getStatus(result.status).value = result.value;
      return 1;
    })
  }

  onEventChange(e) {
    this.setState({selectedEvent:e.target.value});
  }

  onParticipantChange(e) {
    this.setState({selectedParticipant:e.target.value});
  }

  onPlayerChange(e) {
    this.setState({selectedPlayer:e.target.value});
  }

  onRefereeToggle(e) {
    const newState = !this.state.refereeIncluded;
    this.setState({refereeIncluded:newState})
  }
}


export default App;
