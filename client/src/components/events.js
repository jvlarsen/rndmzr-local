import React from 'react';
import Connector from '../helpers/connector';

export default class Events extends React.Component {

  render() {
    var events = Connector.getEvents();

    var eventRadios = [];
    var selectedOption = this.props.selectedOption;
    const onOptionChange = this.props.onOptionChange;
    events.map((event) => {
      eventRadios.push(<div className="radio" key={event.Id}>
              <label>
                <input className='bigradio' type="radio" value={event.Name} key={event.Id} checked={selectedOption === event.Name} onChange={onOptionChange}/>
                {event.Name}
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
