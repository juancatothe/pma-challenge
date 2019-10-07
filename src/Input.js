import React from 'react'
import './App.css'
import Moment from 'moment'
import moment from 'moment-timezone';


class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
        // Take a copy of the current task
        let currentVal =  event.currentTarget.value
        let currentName =  event.currentTarget.name
        if (currentName === 'start'){
          currentVal = Date.parse(currentVal)
        } 
        else if (currentName === 'end'){
          currentVal = Date.parse(currentVal)
        }
        let task = {...this.props.activeTask}
        const updatedTask = {
          ...this.props.activeTask,
          [currentName]: currentVal
        };
        this.props.updateTask(this.props.activeTask.position, updatedTask);
        
    }
  
  
    render() {
      return (
        <div className="input-container">
          <span onClick={this.props.hideInput} className="close-button">Close</span>
          <h2>Update Tasks</h2>
          <form className="input-form">
              <label>
              Task Name:
              <input type="text" name="name" value={this.props.activeTask.name} onChange={this.handleChange} />
              </label>
              <label>
              Task Start Date:
              <input type="date" name="start" value={Moment(this.props.activeTask.start).format('YYYY-MM-DD')} onChange={this.handleChange} />
              </label>
              <label>
              Task End Date:
              <input type="date" name="end" value={Moment(this.props.activeTask.end).format('YYYY-MM-DD')} onChange={this.handleChange} />
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
