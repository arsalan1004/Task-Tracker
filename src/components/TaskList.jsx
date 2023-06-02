import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return(
        <>
            {tasks.map((t)=>(
                <Task key={t.id} task={t} onDelete2={onDelete} onToggle2={onToggle}/>
            ))}
            
        </>
    )

}

export default Tasks;