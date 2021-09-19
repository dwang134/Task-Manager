// import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
// import React from 'react'; need this when you using class syntax

function App() {
    
    //arrayName, and component(function) called used to manipulate state of array
    const [showAddTask, setShowAddTask]= useState(false)
    const [tasks, setTasks] = useState([]);

    //when page loads
    useEffect(()=> {
      const getTasks = async () => {
        const tasksFromServer= await fetchTasks() //make this wait for request
        setTasks(tasksFromServer) //set task using json data
      }

      getTasks()
    }, [])

    //fetch task
    const fetchTasks= async () => {
      const res= await fetch('http://localhost:5000/tasks') //await to request data from server
      const data = await res.json() // data

      return data
    }

      //display empty array
      //this was where static array once was 

    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task
        ) //for each task, if its the same id flip the reminder and give the division the green indication
          //if its not the same id then just leave it as it is task
      );
    }

    //Add Task
    const addTask = async (task) =>{
        const res = await fetch('http://localhost:5000/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task),
        })
    
        const data = await res.json()

        setTasks([...tasks, data])
      // console.log(task);
      // const id= Math.floor(Math.random() *10000) + 1

      // const newTask = {id, ...task} //create object with id attribute and states?
      // setTasks([...tasks, newTask])


    }

    //Delete Task
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      })

      setTasks(tasks.filter((task)=> task.id !== id))
      //filtering out tasks not equivalent to the ID!
      //when you click on first component key 1 the other component stays
    }
    
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
      {/*dont have to make a function just change state*/}
      {showAddTask && <AddTask onAdd={addTask} />}{" "}
      {/*just a shorter way or writing ternary*/}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks available"
      )}
    </div>
  );
}

//class syntax example
// class App extends React.Component {

//   render (){
//     return <Header></Header>
//   }
// }

export default App;


