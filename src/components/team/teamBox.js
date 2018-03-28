import React from 'react';
import PlayerNames from './playerNames';
import Team from './teamName';

export default class TeamBox extends React.Component {
    render() {
        return(
            <div className="flex-grid">
                <div className="col">
                    <Team placeholder='Home' />
                    <PlayerNames selectedOption={this.props.selectedOption} team='Home'/>
                </div>
                <div className="col">
                    <Team placeholder='Away' />
                    <PlayerNames selectedOption={this.props.selectedOption} team='Away'/>
                </div>
            </div>
        );
    }
}