import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

export default function TodoContainer() {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-lg w-full h-full p-4">
        {/* <div className="bg-white flex items-center justify-center rounded-md font-semibold p-2">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white w-full h-full rounded-lg space-y-2">
          {todos?.data?.map((todo) => (
            <TodoCard key={todo._id} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
