import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Randomize from './components/randomize';
import Events from './components/events';
import Participants from './components/participants';
import Players from './components/players';
import ParticipantNumber from './components/participantNumber';
import ProgressBar from './components/progressBar';
import Timer from './components/timer';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selectedEvent: null,
    selectedParticipant: null,
    refereeIncluded: null,
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
        <ProgressBar minute={this.state.minute}/>
        <Timer />
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
        <Players />
        <ParticipantNumber onChangeNumber={this.onParticipantNumberChange.bind(this)}
          onToggleReferee={this.onRefereeToggle.bind(this)}
         refereeIncluded={this.state.refereeIncluded}/>
      </div>
    );
  }

  onEventChange(e) {
    this.setState({selectedEvent:e.target.value});
  }

  onParticipantChange(e) {
    console.log(this.state.minute);
    this.setState({selectedParticipant:e.target.value, minute:this.state.minute+1});
  }

  onRefereeToggle(e) {
    console.log('ref toggled');
    //this.setState({refereeIncluded:!refereeIncluded})
  }

  onParticipantNumberChange(e) {
    console.log(e.target.value);
  }
}


export default App;
