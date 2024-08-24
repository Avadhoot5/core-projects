import React from 'react'

const TodoForm = () => {
  return (
    <div>
        <header className='app_header'>
            <form className='app_form'>
                <input type='text' className='todo_input' placeholder='Enter you task'/>
                <div className='todo_form_bottom'>
                    <button className="tag">HTML</button>
                    <button className="tag">CSS</button>
                    <button className="tag">Javascript</button>
                    <button className="tag">ReactJS</button>
                    <select className='todo_status'>
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    <button className="todo_submit">+ Add Task</button>
                </div>

            </form>
        </header>

    </div>
  )
}

export default TodoForm