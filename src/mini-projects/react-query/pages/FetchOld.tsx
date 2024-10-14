import React from 'react';
import { axiosPost } from '../API/api';

const FetchOld = () => {
  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    try {
      const postData = await axiosPost();
      console.log(postData);
      setPosts(postData);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="playground-learn">
      {posts.map((curEle) => {
        const { id, title, body } = curEle;
        return (
          <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        );
      })}
    </div>
  );
};

export default FetchOld;
