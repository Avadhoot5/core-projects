
import './css/TodoColumn.css';


const TodoColumn = ({title, imageSource}) => {
    
  return (
    <div>
        <section className='task_col'>
            <h2 className='task_col_heading'>
            <img className='task_col_image' src={imageSource} alt="" />
                {title}
            </h2>
        </section>
        
        
    </div>
  )
}

export default TodoColumn