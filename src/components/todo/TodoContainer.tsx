import { useAppSelector } from "@/redux/hooks";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

export default function TodoContainer() {
  const { todos } = useAppSelector((state) => state.todos);
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
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
