import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
const Post = () => {
    const post = useLoaderData()
    return (
        <div className='text-center bg-cyan-50 my-32 space-y-5 border-2 p-5 mx-5 px-52'>
            <h2 className='text-4xl font-semibold capitalize'>{post.title}</h2>
            <h4>{post.body}</h4>
            <Link to='/posts' className='btn'>Go to Posts</Link>
        </div>
    );
};

export default Post;