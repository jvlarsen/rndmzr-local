import React from 'react';

export default class Participants extends React.Component {

  render() {
    return(
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="participant1" checked={this.props.selectedOption === 'participant1'} onChange={this.props.onOptionChange}/>
            Participant 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="participant2" checked={this.props.selectedOption === 'participant2'} onChange={this.props.onOptionChange} />
            Participant 2
          </label>
        </div>
      </form>
    );
  }
}
