import React from 'react';

export default class ParticipantNumber extends React.Component {

  render() {
    var options = [];
    for (var i = 0; i < 22; i++) {
      options.push(<option value={i+1} key={i+1}>{i+1}</option>)
    }

    return(
      <div>
        <select className="dropdown" onChange={this.props.onChangeNumber}>
          {options}
        </select>
      <label>
        Include referee?
          <input type="checkbox" checked={this.props.refereeIncluded} onChange={this.props.onToggleReferee}/>
      </label>
      </div>
    );
  }

  onRefereeToggle(e) {
    console.log(e.target.value);
  }
}
