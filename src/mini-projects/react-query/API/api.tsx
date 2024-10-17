// const fetchPosts = async (page) => {
//     const response = await fetch(
//       `http://localhost:3000/posts?_sort=-id&${
//         page ? `_page=${page}&_per_page=5` : ""
//       }`
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch posts. Status: ${response.status}`);
//     }

//     const postData = await response.json();
//     return postData;
//   };

import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
});

export const fetchIndvPost = async (id: number) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deletePost = (id:number) => {
  return api.delete(`/posts/${id}`);
};

export const updatePost = (id:number)=>{
  return api.patch(`/posts/${id}`,{title:'I have updated the title'})
}

export const axiosPost = async () => {
  const response = await api.get('/posts');
  return response.data;
};

const fetchTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

const fetchDummyPosts = async (pageNumber: number) => {
  const response = await api.get(`/posts?&_page=${pageNumber}&_limit=4`);
  return response.data;
};

// const fetchDummyPosts = async (page: number) => {
//   const response = await api.get(`/posts?_page=${page}&_limit=3`);
//   return response.data;
// };

const fetchTags = async () => {
  const response = await fetch('http://localhost:3000/tags');
  const tagsData = await response.json();
  return tagsData;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addPost = async (post: any) => {
  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  return response.json();
};

export { addPost, fetchDummyPosts, fetchTags, fetchTodos };
