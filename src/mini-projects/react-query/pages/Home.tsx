import { useQuery } from '@tanstack/react-query';
import { fetchPostsAxios } from '../API/api';

const Home = () => {
  const { data, isLoading, status } = useQuery<
    { id: number; title: string; body: string }[]
  >({
    queryKey: ['posts'],
    queryFn: fetchPostsAxios,
  });

  if (isLoading) return <div>Loading...</div>;
  if (status === 'error') return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Posts</h1>
      {/* {data &&
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))} */}
    </div>
  );
};
export default Home;
