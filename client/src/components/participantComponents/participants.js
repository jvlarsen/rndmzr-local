import React from 'react';

export default class Participants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numberOfParticipants:2, participants:['Hans', 'Bob']}
  }
    render() {
      return(
        <div>
          <ParticipantsRadio participants={this.props.participantNames} />
        </div>
      );
    }
}

class ParticipantsRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state={selectedOption:this.props.selectedOption}
  }

  render() {
    var participantRadios = [];
    var selectedOption = this.state.selectedOption;
    var onOptionChange = this.onOptionChange.bind(this);
    var onAddBank = this.onAddBank.bind(this);
    this.props.participants.map(function(participantName, index) {
        participantRadios.push(<div className='radio' key={index}>
          <label>
            <input type='radio' value={participantName} key={index} checked={selectedOption === participantName} onChange={onOptionChange} />
            {participantName}
            <input type='text' key={'status'+index} id={'status'+index} ref={'status'+index} readOnly />
            <input type='button' key={'addBank'+index} id={'addBank'+index} value='Sæt i banken' onClick={onAddBank}/>
            <input type="text" key={'bank'+index} id={'bank'+index} readOnly />
          </label>
        </div>);
        return participantRadios;
    });

    return (
      <form className='leftCol'>
        {participantRadios}
      </form>
    );
  }

  onOptionChange(e) {
    this.setState({selectedOption:e.target.value})
  }

  onAddBank(e) {
    var index = e.target.id.substring(7);
    var status = document.getElementById('status'+index);
    var currBank = document.getElementById('bank'+index);
    var newBank = (parseInt(currBank.value) || 0) + (parseInt(status.value) || 0);
    currBank.value = newBank;
  }
}
