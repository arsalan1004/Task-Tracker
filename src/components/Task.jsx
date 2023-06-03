import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete2, onToggle2}) => {
    return(
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={()=> onToggle2(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete2(task.id)}/> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;