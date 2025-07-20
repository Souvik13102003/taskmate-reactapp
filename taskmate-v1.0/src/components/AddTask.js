import React from 'react'

const AddTask = ({ taskList, setTaskList, task, setTask }) => {

    function handleSubmit(event) {
        event.preventDefault()
        if (task.id) {
            const date = new Date();
            const updatedTaskList = taskList.map((key) => 
                (key.id === task.id ?
                {
                    id: task.id,
                    name: task.name,
                    time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
                } :
                key
            ));
            setTaskList(updatedTaskList)
            setTask({})
        }
        else {
            const date = new Date();
            const newTask =
            {
                id: date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            }
            setTaskList([...taskList, newTask])
            setTask({})
        }

    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task.name || ""}
                    name='task'
                    autoComplete='off'
                    placeholder='Write your Task...'
                    onChange={event => setTask({ ...task, name: event.target.value })} />
                <button type="submit">{task.id? 'Update':'Add'}</button>
            </form>
        </section>
    )
}

export default AddTask