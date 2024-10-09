import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from '../API/api'

const PostList = () => {
    const {data ,isError , isLoading , error} =useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })

  return (
    <div className='container'>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error?.message}</p>}
        {data?.map((post: { id: number; title: string; tags: string[] }) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                {post.tags.map((tag) =>
                    <span key={tag}>{tag}</span>
                )}
            </div>
        ))}
    
                
              
    </div>
  );
}

export default PostList