import TodoCard from "./TodoCard";

export default function TodoContainer() {
  return (
    <div>
      <div className="flex justify-between">
        <button className="font-semibold">Add Todo</button>
        <button className="font-semibold">Filter</button>
      </div>
      <div className="bg-red-300 rounded-lg w-full h-full p-5 space-y-2">
        {/* <div className="bg-white flex items-center justify-center rounded-md font-semibold p-2">
          <p>There is no task pending</p>
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
}
