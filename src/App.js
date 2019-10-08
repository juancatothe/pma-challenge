import React from 'react'
import './App.css'
import Chart from './Chart'
import Input from './Input'



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
                      start: Date.parse('01/17/2020'),
                      end: Date.parse('02/14/2020'),
                      color: '#4682B4',
                      position: 0,
                      rank: 0},
                  {
                      id: 'task2',
                      name: 'Change Tires on Vehicle Fleet',
                      start: Date.parse('01/31/2020'),
                      end: Date.parse('03/17/2020'),
                      color: '#D8BFD8',
                      position: 1,
                      rank: 1},
                  {
                      id: 'task3',
                      name: 'Export Data to Excel Spreadsheet',
                      start: Date.parse('03/31/2020'),
                      end: Date.parse('04/17/2020'),
                      color: '#FFE4B5',
                      position: 2,
                      rank: 2
                  },
                  {
                      id: 'task4',
                      name: 'Purchase 8000 Reams of Printer Paper',
                      start: Date.parse('04/18/2020'),
                      end: Date.parse('05/19/2020'),
                      color: '#FF6347',
                      position: 3,
                      rank: 3
                  },
                  {
                      id: 'task5',
                      name: 'Interview Prospective Candidates',
                      start: Date.parse('05/31/2020'),
                      end: Date.parse('06/21/2020'),
                      color: '#FF1493',
                      position: 4,
                      rank: 4
                  },
                  {
                      id: 'task6',
                      name: 'Clone Github Repositories',
                      start: Date.parse('07/31/2020'),
                      end: Date.parse('08/19/2020'),
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