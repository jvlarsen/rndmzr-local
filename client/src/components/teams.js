import React from 'react';

export default class Teams extends React.Component {
    //a Teams component is made 
    // - from two input fields for entering the team names
    // - 22 input fields for entering the player names, 11 under each team name (this will be a Players component)
    //

    render() {
        return(
            <div>
                <input type="text" key="teamNameHome" placeholder="Home team" />
                vs
                <input type="text" key="teamNameAway" placeholder="Away team" />
            </div>
        );
    }
}