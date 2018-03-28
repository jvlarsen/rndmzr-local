import React from 'react';

export default class Player extends React.Component {
//Initially keeping as a nearby example of how to iterate arrays for component creation.
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
