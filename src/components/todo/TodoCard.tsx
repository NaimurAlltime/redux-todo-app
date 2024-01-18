export default function TodoCard() {
  return (
    <div className="bg-white flex items-center justify-between p-2 rounded-md">
      <input type="checkbox" name="" id="" />
      <p className="font-medium">Todo Title</p>
      <p className="font-medium">Time</p>
      <p className="font-medium">Description</p>
      <div className="space-x-5">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
