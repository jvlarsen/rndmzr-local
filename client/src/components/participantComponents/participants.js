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
    var onDrink = this.onDrink.bind(this);
    this.props.participants.map(function(participantName, index) {
        participantRadios.push(<div className='radio' key={index}>
          <label>
            <input type='radio' value={participantName} key={index} checked={selectedOption === participantName} onChange={onOptionChange} />
            {participantName}
            <input type='text' key={'status'+index} id={'status'+index} ref={'status'+index} readOnly />
            <input type="button" key={'drink'+index} id={'drink'+index} value='Skål' onClick={onDrink}/>
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
    var status = this.getCurrentStatus(index);
    var currBank = this.getCurrentBank(index);

    var statusValue = this.getElementNumericValue(status);
    var currBankValue = this.getElementNumericValue(currBank);
    var newBank = statusValue + currBankValue;
    currBank.value = newBank;
    this.clearElementValue(status);
  }

  getElementNumericValue(element) {
    var value = parseInt(element.value) || 0;
    return value;
  }

  getCurrentBank(index) {
    var currBank = document.getElementById('bank'+index);
    return currBank;
  }

  getCurrentStatus(index) {
    var currStatus = document.getElementById('status'+index);
    return currStatus;
  }

  clearElementValue(element) {
    element.value = null;
  }

  onDrink(e) {
    var index = e.target.id.substring(5);
    var status = this.getCurrentStatus(index);
    this.clearElementValue(status);
    status.value = '';
  }
}
