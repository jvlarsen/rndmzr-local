import React, { Component } from 'react';
import './App.css';
import Randomize from './components/randomize';
import Events from './components/events';
import ParticipantBox from './components/participantComponents/participantBox';
import TeamBox from './components/team/teamBox';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selectedEvent: null,
    selectedParticipant: null,
    refereeIncluded: false,
    minute: 0}
}

  render() {
    return (
      <div className="App">
        <div className="flex-grid">
          <div className="col leftCol" >
            <Events onOptionChange={this.onEventChange.bind(this)} selectedOption={this.state.selectedEvent}/>
          </div>
          <div className="col">
         <TeamBox />
         </div>
          <div className="col">
            <Randomize selectedEvent={this.state.selectedEvent} selectedParticipant={this.state.selectedParticipant}/>
          </div>
        </div>

        <div className="flex-grid">
        </div>
        <ParticipantBox addParticipant={this.addParticipant}/>


      </div>
    );
  }

  onEventChange(e) {
    this.setState({selectedEvent:e.target.value});
  }

  onParticipantChange(e) {
    this.setState({selectedParticipant:e.target.value});
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
