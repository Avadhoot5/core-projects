import { useState } from 'react'
import './css/TodoForm.css'
import Tag from './Tag'

const TodoForm = () => {

    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo'
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
    }

  return (
    <div className='app_header'>
            <form className='app_form' onSubmit={handleSubmit}>
                <input type='text' className='todo_input' placeholder='Enter your task'
                name='task'
                onChange={handleChange}
                />
                <div className='todo_form_bottom'>
                    <div>
                        <Tag title='HTML'/>
                        <Tag title='CSS'/>
                        <Tag title='Javascript'/>
                        <Tag title='ReactJs'/>
                    </div>
                    <div>
                        <select className='todo_status' name='status'
                        onChange={handleChange}
                        >
                            <option value="todo">To Do</option>
                            <option value="inprogress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        <button className="todo_submit">+ Add Task</button>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default TodoForm