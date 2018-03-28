import React from 'react';

export default class PlayerNames extends React.Component {
    render() {
        const numberOfPlayers = 5;

        var options = [];
        for (var i = 0; i < numberOfPlayers; i++) {
            var playerValue = this.props.team + i;
            console.log(playerValue);
            options.push(
            <span>
                <input type="radio" key={playerValue} value={playerValue} checked={this.props.selectedOption === playerValue} onChange={this.props.onOptionChange} key={i+1}/>
                <input type="text" />
                <br/>
            </span>)
        }
        return(
            <div>
                {options}
            </div>
        );
    }
}