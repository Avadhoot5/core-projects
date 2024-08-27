import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "new blog", body: "lorem ipsum", author: "unknown", id: 1},
        {title: "blog is new", body: "lorem ipsum", author: "authr2", id: 2},
        {title: "hello from blog", body: "lorem ipsum", author: "unknown", id: 3},
    ])

  return (
    <div className='home'>
        <div>
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter(blog => blog.author === 'unknown')} title="Unknown Blogs"/>
        </div>
    </div>
  )
}

{/* we cannot call functinons as, fn(), since it gets call automatically
and when we want to pass arguments to the fn we can use anonymous arrow fn */}

export default Home