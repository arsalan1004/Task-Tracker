const AddTask = () => {
    return(
        <form >
            <label htmlFor="">Task</label>
            <input type="text" placeholder="Add a task" />

            <label htmlFor="">Day & Date</label>
            <input type="text" id="date" placeholder="Add day & date"/>

            <label htmlFor="reminder" className="reminder-label">Reminder</label>
            <input className="input-checkbox" type="checkbox" id="reminder" />

            <input type="submit" value="Save Task" />
        </form>

        
    )
}

export default AddTask;