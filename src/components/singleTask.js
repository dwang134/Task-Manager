import {FaTimes} from 'react-icons/fa'


const singleTask = ({task, onDelete, onToggle}) => {
    return (
      <div className={`task ${task.reminder ?'reminder' : ''}`} onDoubleClick= {()=> onToggle(task.id)}>
        <h3>
          {task.text}
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={()=> onDelete(task.id)}  //listening to when specific ids are clicked
          />
        </h3>
        <p>{task.day}</p>
      </div>
    );
}

export default singleTask
