import React, {useState, useEffect} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsGantt from 'highcharts/modules/gantt'

highchartsGantt(Highcharts)

class Chart extends React.Component {
  
    render() {
      return (
        <HighchartsReact
          constructorType={"chart"}
          constructorType={"ganttChart"}
          ref={this.chartComponent}
          highcharts={Highcharts}
          options={this.props.chartOptions}
        />
      );
    }
  }
  
  export default Chart;