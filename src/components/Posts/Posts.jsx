import React from 'react';
import { useLoaderData , Link } from "react-router-dom";
const Posts = () => {
    const posts = useLoaderData()
    
    return (
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl text-center font-semibold'>Posts {posts.length}</h1>
        <div className="md:grid grid-cols-4 gap-5 container mx-auto justify-center items-center my-10">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="card w-80 h-96 bg-cyan-50 border-2 border-gray-400"
              >
                <div className="card-body">
                  <div className="text-center rounded-xl bg-cyan-500 w-5/12">
                    <p className="font-semibold ">User Id: {post.id}</p>
                  </div>
                  <h2 className="card-title capitalize bg-blue-200 p-2 rounded-xl">
                    {post.title}
                  </h2>
                  <p>{post.body.slice(0, 80)}.....</p>
                  <div className="card-actions justify-end">
                    <Link to={`post/${post.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Posts;