import React, { useEffect, useRef, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
}
const DataFetching = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page,setPage] = useState(0);

  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
        abortController.current?.abort();
        abortController.current = new AbortController();
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`,{
            signal: abortController.current?.signal
        });
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (e: any) {
        if(e.name === "AbortError"){
            console.log('Aborted')
            return;
        }
        setError(e);
      }finally{
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if(error) {
    return <div>Something went wrong! Please try again later {error}</div>
  }

  return (
    <>
      <div className="tutorial bg-gray-900 text-white p-4  h-screen">
        <h1 className="mb-4 text-2xl">Data Fetching</h1>
        <button className="bg-violet-600 text-white  px-4 py-2 rounded-md" onClick={()=>setPage(page+1)}>{`Increase Page (${page}) `}</button>
        {isLoading &&
            <div className="text-white text-2xl">Loading...</div> }
          { !isLoading && (
            
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          
        )}
      </div>
    </>
  );
};

export default DataFetching;
