import React from 'react';

export default class Events extends React.Component {

  render() {
    var events = ['Mål', 'Frispark', 'Gult kort', 'Hjørne taget', 'Straffe begået', 'Straffe brændt', 'Skud på mål'];
    var eventRadios = [];
    var selectedOption = this.props.selectedOption;
    const onOptionChange = this.props.onOptionChange;
    console.log(selectedOption);
    events.map(function(eventName, index) {
      eventRadios.push(<div className="radio" key={index}>
              <label>
                <input type="radio" value={eventName} key={index} checked={selectedOption === eventName} onChange={onOptionChange}/>
                {eventName}
              </label>
            </div>);
            return eventRadios;
          });

    return (
      <form>
       {eventRadios}
      </form>
    );
  }
}

