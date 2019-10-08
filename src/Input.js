import React from 'react'
import './App.css'
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';


class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    
      this.handleChange = this.handleChange.bind(this);
      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
    }
  
    handleChange(event) {
        // Take a copy of the current task
        let currentVal =  event.currentTarget.value
        let currentName =  event.currentTarget.name

        const updatedTask = {
          ...this.props.activeTask,
          [currentName]: currentVal
        };
        this.props.updateTask(this.props.activeTask.position, updatedTask);   
    }
  
    handleStartChange(event){
      let currentVal =  event
      currentVal = Date.parse(currentVal)
      
      const updatedTask = {
        ...this.props.activeTask,
        'start': currentVal
      };
      this.props.updateTask(this.props.activeTask.position, updatedTask);   
    }
    
    handleEndChange(event){
      let currentVal =  event
      currentVal = Date.parse(currentVal)
      
      let task = {...this.props.activeTask}
      const updatedTask = {
        ...this.props.activeTask,
        'end': currentVal
      };
      this.props.updateTask(this.props.activeTask.position, updatedTask);   
    }
  
    render() {
      return (
        <div className="input-container">
          <span onClick={this.props.hideInput}>Close</span>
          <h2>Update Tasks</h2>
          <form className="input-form">
              <label>
              Task Name:
              <input type="text" name="name" value={this.props.activeTask.name} onChange={this.handleChange} />
              </label>
              <label>
              Task Start Date:
              <DatePicker
                onChange={ this.handleStartChange }
                selected={this.props.activeTask.start}
                name="start"
                dateFormat="MM/dd/yyyy"
              />
              </label>
              <label>
              Task End Date:
              <DatePicker
                onChange={ this.handleEndChange }
                selected={this.props.activeTask.end}
                name="end"
                dateFormat="MM/dd/yyyy"
              />
              </label>
              <label>
              Task Color:
              <input type="color" name="color" value={this.props.activeTask.color} onChange={this.handleChange} />
              </label>
          </form>
        </div>
      );
    }
  }
  

export default Input;
