import React, { useEffect, useState } from 'react'
import '../App.css'
import TodoForm from '../components/TodoForm';
import TodoColumn from '../components/TodoColumn';
import section1_Image from '../assets/direct-hit.png';
import section2_Image from '../assets/glowing-star.png';
import section3_Image from '../assets/check-mark-button.png';

const oldTasks = localStorage.getItem('tasks');

const Home = () => {

  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }, [tasks])

  return (
    <div className='app'>
        <TodoForm setTasks={setTasks}/>
        <main className="app_main">
            <TodoColumn handleDelete={handleDelete} tasks={tasks} status = 'todo' 
            imageSource = {section1_Image} title='To Do'/>
            <TodoColumn handleDelete={handleDelete} tasks={tasks} status = 'inprogress' 
            imageSource = {section2_Image} title='In Progress'/>
            <TodoColumn handleDelete={handleDelete} tasks={tasks} status = 'done' 
            imageSource = {section3_Image} title='Done'/>
        </main>
    </div>
  )
}

export default Home