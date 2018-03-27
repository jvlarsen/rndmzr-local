import React from 'react';
import Progress from 'react-progressbar';

export default class ProgressBar extends React.Component {
  render() {
    return(
          <Progress completed={this.props.minute} />
    );
  }

}
