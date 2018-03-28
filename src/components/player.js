import React from 'react';

export default class Player extends React.Component {

  render() {
    var names = ['Jake', 'Jon', 'Thruster'];
    return (
        <ul>
            {names.map(function(name, index){
                return <li key={ index }>{name}</li>;
              })}
        </ul>
      );
  }
}
