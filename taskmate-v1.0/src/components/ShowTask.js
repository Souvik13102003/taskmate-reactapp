import React from 'react'

const ShowTask = ({taskList, setTaskList, task, setTask}) => {
    function handleClearAll() {
        setTaskList([])
    }

    function handleEdit(id) {
        const selectedTask = taskList.find(key=> key.id===id)
        setTask(selectedTask)
    }
    function handleDelete(id) {
        const updatedTaskList = taskList.filter(key => key.id !==id )
        setTaskList(updatedTaskList)
    }

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">To-Do</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={handleClearAll}>Clear All</button>
            </div>

            <ul>
                {
                    taskList.map((key) => (

                        <li key={key.id}>
                            <p>
                                <span className='name'>{key.name}</span>
                                <span className='time'>{key.time}</span>
                            </p>
                            <i onClick={()=>handleEdit(key.id)} className='bi bi-pencil-square'></i>
                            <i onClick={()=>handleDelete(key.id)} className="bi bi-trash"></i>
                        </li>

                    ))
                }
            </ul>

        </section>
    )
}

export default ShowTask