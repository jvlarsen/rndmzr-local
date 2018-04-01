import React from 'react';

export default class Randomize extends React.Component {

render() {
  return (
    <div>
      <input type="button" className="randomizer" value="RANDOMIZE" onClick={this.clickHandler.bind(this)}/>
    </div>
    );
  }

  clickHandler() {
    const selectedEvent = this.props.selectedEvent;
    const selectedPlayer = this.props.selectedPlayer;
    console.log('Randomizer clicked');
    console.log(selectedEvent + ' - ' + selectedPlayer);
  }
}
