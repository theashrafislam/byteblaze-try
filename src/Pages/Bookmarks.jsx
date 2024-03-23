import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils/Index";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState(getBlogs() || [])
    useEffect(() => {
        const storedBlogs = getBlogs()
        console.log(storedBlogs)
        setBlogs(storedBlogs)
    }, [])

    const handleDelete = id => {
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }
    if(blogs.length < 1){
        return <EmptyState message="No Bookmarks Abailable!" address={'/blogs'} label={'Go To Blogs'}></EmptyState>
    }

    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-10 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.slice(0, 19).map(blog => <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}></BlogCard>)
            }
		</div>
    );
};

export default Bookmarks