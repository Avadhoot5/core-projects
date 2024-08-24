import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <div className='app'>
        <header className="app_header">
            Header Section
        </header>
        <main className="app_main">
            <section className="task_col">Section 1</section>
            <section className="task_col">Section 2</section>
            <section className="task_col">Section 3</section>
        </main>
    </div>
  )
}

export default Home