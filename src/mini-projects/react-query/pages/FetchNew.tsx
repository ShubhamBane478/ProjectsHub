import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchDummyPosts } from '../API/api';

const FetchNew = () => {
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
                <NavLink to={`/react-query/fetch-new/${id}`}>
                  <h6 className="text-xl font-semibold mb-2">{id}</h6>
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <p className="text-gray-400">{body}</p>
                </NavLink>
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
