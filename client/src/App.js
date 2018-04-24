import React, { Component } from 'react';
import './App.css';
import Randomize from './components/randomize';
import Events from './components/events';
import ParticipantBox from './components/participantComponents/participantBox';
import TeamBox from './components/team/teamBox';

import Connector from './helpers/connector';
import ElementsHelper from './helpers/elementsHelper';

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
/*  componentDidMount() {
    fetch('/participants')
      .then(res => res.json())
      .then(participants => this.setState({participants}));

  }
  */

  render() {
    console.log(this.state.participants);
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
          <ParticipantBox participants={this.state.participants}/>
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
    console.log(e.target.value);
    this.setState({selectedPlayer:e.target.value});
  }

  onRefereeToggle(e) {
    const newState = !this.state.refereeIncluded;
    this.setState({refereeIncluded:newState})

    console.log(newState);
  }
}


export default App;
