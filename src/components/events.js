import React from 'react';

export default class Events extends React.Component {

  render(){
    return (
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={this.props.selectedOption === 'option1'} onChange={this.props.onOptionChange}/>
            Mål!
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" checked={this.props.selectedOption === 'option2'} onChange={this.props.onOptionChange}/>
            Frispark
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" checked={this.props.selectedOption === 'option3'} onChange={this.props.onOptionChange}/>
            Gult kort
          </label>
        </div>
      </form>
    );
  }
}

/*import React from 'react';

export default class Events extends React.Component {

  render() {
    var events = ['Mål', 'Frispark', 'Gult kort', 'Hjørne', 'Straffe begået', 'Straffe brændt', 'Skud på mål'];
    var eventRadios = [];

    events.map(function(eventName, index) {
    eventRadios.push(<div className="radio">
              <label>
                <input type="radio" value={eventName} checked={this.props.selectedOption === eventName}/>
                {eventName}
              </label>
            </div>);
          });

    return (
      <form>
       {eventRadios}
      </form>
    );
  }
}
*/
