import React from 'react';

export default class PlayersBox extends React.Component {
    render() {
        const numberOfPlayers = 10;

        var options = [];
        for (var i = 0; i < numberOfPlayers; i++) {
          options.push(<span><input type="text" key={i+1}/><br/></span>)
        }
        return(
            <div>
                <label>numberOfPlayers: {numberOfPlayers}</label>
                {options}

            </div>
        );
    }
}