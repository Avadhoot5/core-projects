import './css/TodoForm.css'
import Tag from './Tag'

const TodoForm = () => {
  return (
    <div className='app_header'>
            <form className='app_form'>
                <input type='text' className='todo_input' placeholder='Enter your task'/>
                <div className='todo_form_bottom'>
                    <div>
                        <Tag title='HTML'/>
                        <Tag title='CSS'/>
                        <Tag title='Javascript'/>
                        <Tag title='ReactJs'/>
                    </div>
                    <div>
                        <select className='todo_status'>
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