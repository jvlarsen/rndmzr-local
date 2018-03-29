import React from 'react';
import ParticipantAdder from './participantAdder';
import ParticipantsRadio from './participants';

export default class ParticipantBox extends React.Component {
    render(){
        return(
            <div>
                <ParticipantAdder addParticipant={this.addParticipant.bind(this)}/>
                <ParticipantsRadio />
            </div>
        );
    }

    addParticipant(e) {
        e.preventDefault();
        console.log(e.target.value);
    }
}