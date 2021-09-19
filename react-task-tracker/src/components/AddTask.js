import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [text, setTask]= useState('')
    const [day, setDay]= useState('')
    const [reminder, setReminder]= useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        // (!text&& !day&& !reminder) ? alert('Please add a text') 

        if (!text || !day || !reminder){
            alert('Please make sure to fill out the form')
            return
        }else{

        //pass these states back to onAdd prop which calls the addTask function
            onAdd({text, day, reminder})
            
            //clear states and reset
            setTask('')
            setDay('')
            setReminder(false)
        }
    }


    return (
      <form className="add-form" onSubmit={onSubmit}>
        {" "}
        {/*onSubmit call that function*/}
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Reminder</label>
          <input
            type="checkbox"
            placeholder="Add Task"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    );
}

export default AddTask
