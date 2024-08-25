import { useState } from 'react'
import './css/TodoForm.css'
import Tag from './Tag'

const TodoForm = ({setTasks}) => {

    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    })

    const isTagClicked = (tag) => {
        return taskData.tags.includes(tag);
    }

    const selectTag = (tag) => {
        if (taskData.tags.includes(tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag);
            setTaskData((prev) => {
                return {...prev, tags: filterTags}
            })
        } else {

            setTaskData((prev) => {
                return {...prev, tags: [...prev.tags, tag]}
            })            
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    }

const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData({
            task: '',
            status: 'todo',
            tags: []
        });
    }

  return (
    <div className='app_header'>
            <form className='app_form' onSubmit={handleSubmit}>
                <input type='text' className='todo_input' placeholder='Enter your task'
                name='task'
                value={taskData.task}
                onChange={handleChange}
                />
                <div className='todo_form_bottom'>
                    <div>
                        <Tag selectTag={selectTag} selected={isTagClicked('HTML')} tag='HTML'/>
                        <Tag selectTag={selectTag} selected={isTagClicked('CSS')} tag='CSS'/>
                        <Tag selectTag={selectTag} selected={isTagClicked('Javascript')} tag='Javascript'/>
                        <Tag selectTag={selectTag} selected={isTagClicked('ReactJs')} tag='ReactJs'/>
                    </div>
                    <div>
                        <select className='todo_status' name='status'
                        onChange={handleChange}
                        value={taskData.status}
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