import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

export default function TodoContainer() {
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
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
}
