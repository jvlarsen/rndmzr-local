import React from 'react';
import Progress from 'react-progressbar';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state={minutesElapsed:0}
    }

    getInitialState() {
      return {minutesElapsed: 0};
    }

    tick() {
      this.setState({minutesElapsed: this.state.minutesElapsed + 1});
    }

    componentDidMount() {
      this.interval = setInterval(this.tick.bind(this), 60000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    render() {
      return (
        <div>Time elapsed: {this.state.minutesElapsed}
        <Progress completed={this.state.minutesElapsed} />
        </div>
      );
    }
  }
  