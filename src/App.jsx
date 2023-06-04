import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'


function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Repair Car',
      day: 'May 12th at 12:00 am',
      reminder: true
    },
    {
      id: 2,
      text: 'Grocery Shopping',
      day: 'May 12th at 4:00 pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Go to University',
      day: 'May 13th at 8:30 am',
      reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id!==id));
  }

  const toggleReminder = (id) =>{
    
    setTasks(tasks.map((task)=>
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  const taskAddition = (newtask) => {
    const id = tasks.length + 1;
    const temptask = {id, ...newtask };
    setTasks([...tasks, temptask]);
  }
  
  return (
    <div className='main'>
      <Header color='green' text='Add'/>
      <AddTask originalTask = {tasks} onAddition={taskAddition}/>
      {tasks.length>0 ? <TaskList tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task Added'}
    </div>
  )

  

}

export default App;