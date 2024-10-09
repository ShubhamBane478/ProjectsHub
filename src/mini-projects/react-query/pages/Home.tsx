import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPosts } from "../API/api";
import PostList from "../components/PostList";

const Home = () => {
  const { data, isLoading,status } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  console.log(data,isLoading,status);
  return <div>
    
    <PostList/>
  </div>;
};

export default Home;
