import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Randomize from './components/randomize';
import Events from './components/events';
import Participants from './components/participants';
import Player from './components/player';
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
        <Teams />
        <table>
          <tbody>
            <tr>
              <td>
                <div>
                  <Events onOptionChange={this.onEventChange.bind(this)} selectedOption={this.state.selectedEvent}/>
                </div>
              </td>
              <td>
                <div>
                  <Participants onOptionChange={this.onParticipantChange.bind(this)} selectedOption={this.state.selectedParticipant}/>
                </div>
              </td>
              <td>
                <div>
                  <Randomize selectedEvent={this.state.selectedEvent} selectedParticipant={this.state.selectedParticipant}/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Player />
        <PlayersBox includeReferee={this.state.refereeIncluded} />
        <ParticipantNumber onChangeNumber={this.onSetNumberOfParticipants.bind(this)}
          onToggleReferee={this.onRefereeToggle.bind(this)}
         refereeIncluded={this.state.refereeIncluded}/>
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
