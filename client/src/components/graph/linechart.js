import React from 'react';
import Line from './line'
import DataSeries from './dataseries';
import d3 from '../../../../node_modules/d3-scale';

const LineChart = React.createClass({

  propTypes: {
    width:  React.PropTypes.number,
    height: React.PropTypes.number,
    data:   React.PropTypes.object.isRequired
  },

  getDefaultProps(){
    return {
      width:  600,
      height: 300
    }
  },

  render() {
    let { width, height, data } = this.props;

    let xScale = d3.scale.ordinal()
                   .domain(data.xValues)
                   .rangePoints([0, width]);

    let yScale = d3.scale.linear()
                   .range([height, 10])
                   .domain([data.yMin, data.yMax]);

    return (
      <svg width={width} height={height}>
          <DataSeries
            xScale={xScale}
            yScale={yScale}
            data={data}
            width={width}
            height={height}
            />
      </svg>
    );
  },



});

export default LineChart;
