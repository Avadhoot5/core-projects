import React from 'react'

const Home = () => {

    const handleClick = (e) => {
        console.log("hello there", e);
    }

    const handleClickAgain = (name, e) => {
        console.log(`Hello ${name}, ${e.target}`);
    }
    
  return (
    <div className='home'>
        <h2>Homepage</h2>
        <div>
            {/* we cannot call functinons as, fn(), since it gets call automatically
            and when we want to pass arguments to the fn we can use anonymous arrow fn */}
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('test',e)}>Click me again</button>
        </div>
    </div>
  )
}

export default Home