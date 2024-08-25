import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png';
import './css/TodoCard.css'

const TodoCard = ({title, tags, handleDelete, index}) => {

  return (
    <article className="todo_card">
        <p className="todo_text">{title}</p>
        <div className="todo_card_bottom_line">
            <div className="todo_card_tags">
                {tags.map((tag, index) => <Tag key={index} tag={tag} selected/>)}
            </div>        
            <div className='todo_delete'>
                <img onClick={(()=> handleDelete(index))} className='deleteIcon' src={deleteIcon} alt="" />
            </div>    
        </div>
    </article>
  )
}

export default TodoCard