import React from 'react';

export default class Participants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numberOfParticipants:2, participants:['Hans', 'Bob']}
  }
    render() {
      return(
        <div>
          <ParticipantsRadio participants={this.props.participants} />
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
    console.log(this.props.participants);
    var participantRadios = [];
    var selectedOption = this.state.selectedOption;
    var onOptionChange = this.onOptionChange.bind(this);
    var onAddBank = this.onAddBank.bind(this);

/*    {this.state.participants.map(participant =>
    <li key={participant.id}>{participant.name}</li>)}
*/
    this.props.participants.map(participant =>
        participantRadios.push(
          <div className='radio' key={participant.id}>
          <label>
            <input type='radio' value={participant.name} key={participant.id} checked={selectedOption === participant.name} onChange={onOptionChange} />
            {participant.name}
            <input type='text' key={'status'+participant.id} id={'status'+participant.id} ref={'status'+participant.id} readOnly />
            <input type='button' key={'addBank'+participant.id} id={'addBank'+participant.id} value='Sæt i banken' onClick={onAddBank}/>
          </label>
        </div>));
        //return participantRadios;


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
    console.log(e.target.id);
  }
}
