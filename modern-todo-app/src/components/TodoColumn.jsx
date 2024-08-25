
import './css/TodoColumn.css';
import TodoCard from '../components/TodoCard';


const TodoColumn = ({title, imageSource, tasks, status, handleDelete}) => {

  return (
    <div>
        <section className='task_col'>
            <h2 className='task_col_heading'>
            <img className='task_col_image' src={imageSource} alt="" />
                {title}
            </h2>
            <div>
              {tasks.map(
                (task, index) => 
                  task.status === status && <TodoCard key={index} title = {task.task} tags = {task.tags} handleDelete={handleDelete} index={index}/>
              )}
            </div>
        </section>
    </div>
  )
}

export default TodoColumn