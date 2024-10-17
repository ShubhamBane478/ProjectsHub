import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { deletePost, fetchDummyPosts, updatePost } from '../API/api';

const FetchNew = () => {
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useQuery({
    queryKey: ['posts', pageNumber],
    queryFn: () => fetchDummyPosts(pageNumber),
    placeholderData: keepPreviousData,
    // gcTime: 5000,
    // staleTime: 50000,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
  });

  // const {
  //   data: todoData,
  //   error: todoError,
  //   isLoading: todoLoading
  // } = useQuery({queryKey:['todos'],
  //   queryFn: fetchTodos,
  // staleTime:50000});

  //mutation function to delete a post
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['posts', pageNumber], (oldData: []) => {
        return oldData.filter((post: { id: number }) => post.id !== id);
      });
      queryClient.invalidateQueries({ queryKey: ['posts', pageNumber] });
    },
    onError: (error) => {
      console.error('Error deleting post:', error);
      // Optionally, show an error message to the user
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  //mutation function to update a post
  const updateMutation = useMutation({
    mutationFn: (id: number) => updatePost(id),
    onSuccess: (apiData, postId) => {
      console.log(apiData, postId);
      queryClient.setQueryData(['posts', pageNumber], (postData: []) => {
        return postData?.map(
          (currPost: { id: number; [key: string]: string }) => {
            return currPost.id === postId
              ? { ...currPost, title: apiData.data.title }
              : currPost;
          },
        );
      });
      // queryClient.invalidateQueries({ queryKey: ['posts', pageNumber] });
    },
    onError: (error) => {
      console.error('Error deleting post:', error);
      // Optionally, show an error message to the user
    },
  });

  // const deleteMutation = useMutation({
  //   mutationFn: (id: number) => deletePost(id),

  //   onSuccess: (data, id) => {
  //     console.log(data, id);
  //     queryClient.setQueryData(['posts', pageNumber], (curEle: { id: number }[]) => {
  //       return curEle.filter((post) => post.id !== id);
  //     });      // queryClient.invalidateQueries({ queryKey: ['posts'] });
  //   },
  // });

  // const handleDelete = (id: number) => {
  //   deleteMutation.mutate(id);
  // };

  if (postsLoading) return <div>Loading...</div>;
  if (postsError) return <div>An error occurred</div>;

  return (
    <>
      <main className="container mx-auto p-6 w-6/12">
        <div className="grid gap-4">
          {posts.map((post: { id: number; title: string; body: string }) => {
            const { id, title, body } = post;
            return (
              <div
                key={id}
                className="bg-gray-800 p-6  shadow-lg border-l border-white text-left"
              >
                <h6 className="text-xl font-semibold mb-2">{id}</h6>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-400">{body}</p>
                <NavLink to={`/react-query/fetch-new/${id}`}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 rounded">
                    More Details
                  </button>
                </NavLink>
                <div className="container flex flex-row text-left justify-center  gap-2 mt-8 ">
                  <button
                    onClick={() => handleDelete(id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded"
                  >
                    Delete Post
                  </button>

                  <button
                    onClick={(id) => updateMutation.mutate(id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded"
                  >
                    Update Post
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container flex flex-row text-left justify-center  gap-2 mt-8 ">
          <button
            disabled={pageNumber === 1 ? true : false}
            // disabled={true}
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="bg-green-500 disabled:bg-green-700  hover:bg-green-700 text-white font-bold py-2 px-4  rounded"
          >
            Prev
          </button>
          <h2>{pageNumber}</h2>
          <button
            onClick={() => setPageNumber((prev) => prev + 1)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
};
export default FetchNew;
