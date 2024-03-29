import { useState } from "react";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

export default function TodoContainer() {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState("");

  // from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient rounded-lg w-full h-full p-4">
        {/* <div className="bg-white flex items-center justify-center rounded-md font-semibold p-2">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white w-full h-full rounded-lg space-y-2">
          {todos?.data?.map((todo: TTodoCardProps) => (
            <TodoCard key={todo._id} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
