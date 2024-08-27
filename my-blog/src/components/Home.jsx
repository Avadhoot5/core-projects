import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {

    const { data: blogs, isLoading, error, setData} = useFetch('http://localhost:3000/blogs');

    const handleDelete = (id) => {
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setData(newBlog);
    }

  return (
    <div className='home'>
        <div>
            {error && <div> {error} </div>}
            {isLoading &&  <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            
        </div>
    </div>
  )
}

{/* we cannot call functinons as, fn(), since it gets call automatically
and when we want to pass arguments to the fn we can use anonymous arrow fn */}

export default Home