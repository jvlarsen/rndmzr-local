import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Randomize from './components/randomize';
import Events from './components/events';
import Participants from './components/participants';
import ParticipantNumber from './components/participantNumber';
import Timer from './components/timer';
import Teams from './components/teams';
import PlayersBox from './components/playersBox';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <Timer />
        

        <div className="flex-grid">
          <div className="col leftCol" >
            <Events onOptionChange={this.onEventChange.bind(this)} selectedOption={this.state.selectedEvent}/>
          </div>
          <div className="col">
            <Participants onOptionChange={this.onParticipantChange.bind(this)} selectedOption={this.state.selectedParticipant}/>
          </div>
          <div className="col">
            <Randomize selectedEvent={this.state.selectedEvent} selectedParticipant={this.state.selectedParticipant}/>
          </div>
        </div>
        <div className="col"><ParticipantNumber onChangeNumber={this.onSetNumberOfParticipants.bind(this)}
          onToggleReferee={this.onRefereeToggle.bind(this)}
         refereeIncluded={this.state.refereeIncluded}/>
         <Teams />
         </div>
          
        <div className="flex-grid">
      
          <div className="col leftCol">
            <PlayersBox includeReferee={this.state.refereeIncluded} />
          </div>
          <div className="col">
            <PlayersBox includeReferee={this.state.refereeIncluded} />
          </div>
        </div>

        

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
}


export default App;
