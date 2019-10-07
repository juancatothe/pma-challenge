import React from 'react'
import logo from './logo.svg'
import './App.css'
import Chart from './Chart'
import Input from './Input'
import Highcharts from 'highcharts'



class App extends React.Component {

  showInput = (e) => {
    this.setState({
      inputDisplay : true,
      activeTask: {
        id: e.point.options.id,
        name: e.point.options.name,
        start: e.point.options.start,
        end: e.point.options.end,
        color: e.point.options.color,
        position: e.point.options.position,
        rank: e.point.options.rank
      }
    })
  }

  hideInput = () =>{
    this.setState({
      inputDisplay : false
    })
  }

  updateTask = (key, updatedTask) => {
    // 1. Take a copy of the current state
    const tasks = { ...this.state.options}
    console.log(tasks)
    // 2. Update that state
    tasks.series[0].data[key] = updatedTask
    // 3. Set that to state
    this.setState({ 
      options: tasks,
      activeTask:{
        id: tasks.series[0].data[key].id,
        name: tasks.series[0].data[key].name,
        start: tasks.series[0].data[key].start,
        end: tasks.series[0].data[key].end,
        color: tasks.series[0].data[key].color,
        position: tasks.series[0].data[key].position,
        rank: tasks.series[0].data[key].rank
    }});
  };

  state = {
      options: {
          title:{
            text: 'Very Important Companywide Tasklist'
          },
          xAxis: {
              type: 'datetime'
          },
          series: [
              {
                  data: [{
                      id: 'task1',
                      name: 'Shred Classified Documents',
                      start: Date.parse('2020-01-17'),
                      end: Date.parse('02/14/2020'),
                      color: '#4682B4',
                      position: 0,
                      rank: 0},
                  {
                      id: 'task2',
                      name: 'Change Tires on Vehicle Fleet',
                      start: Date.UTC(2020, 0, 31),
                      end: Date.UTC(2020, 2, 17),
                      color: '#D8BFD8',
                      position: 1,
                      rank: 1},
                  {
                      id: 'task3',
                      name: 'Export Data to Excel Spreadsheet',
                      start: Date.UTC(2020, 2, 31),
                      end: Date.UTC(2020, 3, 17),
                      color: '#FFE4B5',
                      position: 2,
                      rank: 2
                  },
                  {
                      id: 'task4',
                      name: 'Purchase 8000 Reams of Printer Paper',
                      start: Date.UTC(2020, 3, 18),
                      end: Date.UTC(2020, 4, 19),
                      color: '#FF6347',
                      position: 3,
                      rank: 3
                  },
                  {
                      id: 'task5',
                      name: 'Interview Prospective Candidates',
                      start: Date.UTC(2020, 4, 31),
                      end: Date.UTC(2020, 5, 17),
                      color: '#FF1493',
                      position: 4,
                      rank: 4
                  },
                  {
                      id: 'task6',
                      name: 'Clone Github Repositories',
                      start: Date.UTC(2020, 6, 31),
                      end: Date.UTC(2020, 7, 17),
                      color: '#7FFF00',
                      position: 5,
                      rank: 5
                  }],
                  events:{
                      click: (e) => {this.showInput(e)}
                  }
              }
          ]
      },
      inputDisplay: false,
      activeTask: {}
    };
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Chart chartOptions={this.state.options}></Chart>
        </header>
        { this.state.inputDisplay ? <Input hideInput={this.hideInput} updateTask={this.updateTask} activeTask={this.state.activeTask}/> : null }
      </div>
    );
  }
}


export default App;
