
import './css/TodoColumn.css';
import TodoCard from '../components/TodoCard';


const TodoColumn = ({title, imageSource}) => {
    
  return (
    <div>
        <section className='task_col'>
            <h2 className='task_col_heading'>
            <img className='task_col_image' src={imageSource} alt="" />
                {title}
            </h2>
            <div>
                <TodoCard/>
            </div>
        </section>
        
        
    </div>
  )
}

export default TodoColumn