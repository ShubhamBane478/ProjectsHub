import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// import { addTodo, fetchTodos } from "./api";
import TodoCard from "../components/TodoCard";
import { addTodo, fetchTodos } from "../api/todoApi";


export default function ReactQuery() {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos", { search }],
    queryFn: () => fetchTodos(search),
    staleTime: Infinity,
    // cacheTime: 0,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center gap-2 w-full flex-col items-center h-screen bg-gray-900">
        <h4 className="text-2xl font-bold">React Query</h4>
      <div className="mb-3 flex gap-3 justify-space-between">
        <input
        className="border-2 border-gray-300 text-black rounded-md px-3 py-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-blue-700 rounded-md px-3 py-2 text-white"
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}