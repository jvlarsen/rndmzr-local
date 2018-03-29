import React from 'react';

export default class PlayerNames extends React.Component {
constructor(props) {
    super(props);
    this.state = {selectedPlayer:null}
}

    render() {
        const numberOfPlayers = 5;

        var options = [];
        for (var i = 0; i < numberOfPlayers; i++) {
            var playerValue = this.props.team + i;
            console.log(playerValue);
            options.push(
            <div key={playerValue}>
                <input type="radio" key={playerValue} value={playerValue} checked={this.state.selectedOption === playerValue} onChange={this.onPlayerChange.bind(this)}/>
                <input type="text" />
                <br/>
            </div>)
        }
        return(
            <div>
                {options}
            </div>
        );
    }

    onPlayerChange(e) {
        this.setState({selectedOption:e.target.value});
    }
}