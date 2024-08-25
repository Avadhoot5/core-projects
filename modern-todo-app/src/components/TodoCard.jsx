import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png';
import './css/TodoCard.css'

const TodoCard = () => {
  return (
    <article className="todo_card">
        <p className="todo_text">This is a sample text</p>
        <div className="todo_card_bottom_line">
            <div className="todo_card_tags">
                <Tag title='HTML'/>
                <Tag title='CSS'/>
            </div>        
            <div className='todo_delete'>
                <img className='deleteIcon' src={deleteIcon} alt="" />
            </div>    
        </div>
    </article>
  )
}

export default TodoCard