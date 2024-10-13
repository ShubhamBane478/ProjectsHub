import { useQuery } from '@tanstack/react-query';
import { fetchPostsAxios ,fetchTodos} from '../API/api';

const FetchNew = () => {
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsAxios,
    gcTime: 5000,
    // staleTime: 50000,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  const { 
    data: todoData, 
    error: todoError, 
    isLoading: todoLoading 
  } = useQuery({queryKey:['todos'], 
    queryFn: fetchTodos,
  staleTime:50000});

  if (postsLoading || todoLoading) return <div>Loading...</div>;
  if (postsError || todoError) return <div>An error occurred</div>;

  return (
    <>
      <div className='todo-list'>
      <ul>
      {todoData.map((todo: { id: number; title: string }) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
      </div>
      <div className="playground-learn">
        {posts && Array.isArray(posts) && posts.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </div>
    </>
  );
};export default FetchNew;
