import React from 'react'
import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "new blog", body: "lorem ipsum", author: "test", id: 1},
        {title: "blog is new", body: "lorem ipsum", author: "authr2", id: 2},
        {title: "hell from blog", body: "lorem ipsum", author: "new author", id: 3},
    ])

  return (
    <div className='home'>
        <h2>Homepage</h2>
        <div>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

{/* we cannot call functinons as, fn(), since it gets call automatically
and when we want to pass arguments to the fn we can use anonymous arrow fn */}

export default Home