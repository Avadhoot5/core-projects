import React from 'react'
import '../App.css'
import TodoForm from '../components/TodoForm';
import TodoColumn from '../components/TodoColumn';
import section1_Image from '../assets/direct-hit.png';
import section2_Image from '../assets/glowing-star.png';
import section3_Image from '../assets/check-mark-button.png';

const Home = () => {
  return (
    <div className='app'>
        <TodoForm/>
        <main className="app_main">
            <TodoColumn imageSource = {section1_Image} title='To Do'/>
            <TodoColumn imageSource = {section2_Image} title='In Progress'/>
            <TodoColumn imageSource = {section3_Image} title='Done'/>
        </main>
    </div>
  )
}

export default Home