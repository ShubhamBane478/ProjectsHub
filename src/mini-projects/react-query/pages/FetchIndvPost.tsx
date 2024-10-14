import { useQuery } from '@tanstack/react-query';
import { NavLink, useParams } from 'react-router-dom';
import { fetchIndvPost } from '../API/api';

const FetchIndvPost = () => {
  const { id } = useParams();

  const {
    data: indvPosts,
    isLoading: indvPostsLoading,
    error: indvpostsError,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchIndvPost(Number(id)),
  });

  if (indvPostsLoading) return <div>Loading...</div>;
  if (indvpostsError) return <div>An error occurred</div>;

  // Use the id to fetch the individual post data
  return (
    <div className="container mx-auto p-6 w-6/12 text-left">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Individual Post Number - {indvPosts.id}{' '}
      </h2>
      <ul>
        <li>
          <p>
            <span>ID:</span>
            {indvPosts.id}
          </p>
          <p>Title : {indvPosts.title}</p>
          <p>Body: {indvPosts.body}</p>
        </li>
      </ul>
      <NavLink to={'/react-query/fetch-new'}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-10 rounded">
          Go Back
        </button>
      </NavLink>
    </div>
  );
};

export default FetchIndvPost;
