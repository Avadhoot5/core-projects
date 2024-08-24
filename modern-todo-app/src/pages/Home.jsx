import React from 'react'
import '../App.css'
import TodoForm from '../components/TodoForm';

const Home = () => {
  return (
    <div className='app'>
        <TodoForm/>
        <main className="app_main">
            <section className="task_col">Section 1</section>
            <section className="task_col">Section 2</section>
            <section className="task_col">Section 3</section>
        </main>
    </div>
  )
}

export default Home