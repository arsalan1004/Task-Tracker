import { useState } from "react";


const AddTask = ({originalTask, onAddition}) => {
    
    const [data, setData] = useState({
        text:'',
        day:'',
        reminder:false
    });

    const onSubmit = () => {
        if (!data.text || !data.day){
            alert("Please fill all fields")
            return
        }
        onAddition(data);
    }
    return(
        <>
            <form >
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add a task" onChange={(e)=>{
                    setData({...data, text: e.target.value} )
                }}/>

                <label htmlFor="">Day & Date</label>
                <input type="text" id="date" placeholder="Add day & date" onChange={(e)=>{
                    setData({...data, day: e.target.value})
                }}/>

                <label htmlFor="reminder" className="reminder-label">Reminder</label>
                <input className="input-checkbox" type="checkbox" id="reminder"  onChange={(e)=>{
                    setData(e.target.checked ? {...data, reminder:true}: {...data, reminder:false})
                }}/>
            </form> 
            <button onClick={onSubmit}>Save Task</button>
        </>     
    )
}

export default AddTask;