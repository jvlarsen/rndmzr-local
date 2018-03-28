import React from 'react';

export default class PlayersBox extends React.Component {
    render() {
        const numberOfPlayers = this.props.includeReferee ? 21 : 20;
        const includeReferee = this.props.includeReferee ? 'Yes' : 'No';

        var options = [];
        for (var i = 0; i < numberOfPlayers; i++) {
          options.push(<input type="text" key={i+1}/>)
        }
        return(
            <div>
                <label>numberOfPlayers: {numberOfPlayers}</label>
                <label>include ref: {includeReferee} </label>
                {options}

            </div>
        );
    }
}