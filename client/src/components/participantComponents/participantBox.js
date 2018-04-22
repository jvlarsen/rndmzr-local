import React from 'react';
import ParticipantAdder from './participantAdder';
import Participants from './participants';

export default class ParticipantBox extends React.Component {
  constructor(props) {
    super(props);
    this.state={participants: this.props.participants}
  }

    render(){
        return(
            <div>
                <ParticipantAdder addParticipant={this.addParticipant.bind(this)}/>
                <Participants participants={this.props.participants}/>
            </div>
        );
    }

    addParticipant(newParticipant) {
        if (newParticipant.length === 0 || this.state.participantNames.includes(newParticipant)) {
          return;
        }
        this.state.participantNames.push(newParticipant);
        this.setState({participantNames: this.state.participantNames});
    }
}
