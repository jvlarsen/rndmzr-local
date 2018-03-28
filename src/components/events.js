import React from 'react';

/*export default class Events extends React.Component {

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
*/

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
          });

    return (
      <form>
       {eventRadios}
      </form>
    );
  }
}

