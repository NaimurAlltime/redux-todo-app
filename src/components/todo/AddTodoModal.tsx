import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodosMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";

export function AddTodoModal() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  // for local
  // const dispatch = useAppDispatch();

  // add todo for server
  const [addTodo, { data, isLoading, isSuccess, isError }] =
    useAddTodosMutation();

  console.log({ data, isLoading, isSuccess, isError });

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(32).substring(2, 7);
    const taskDetails = {
      title: task,
      description,
      isCompleted: false,
      priority,
    };

    console.log("modal:", taskDetails);
    // for local
    // dispatch(addTodo(taskDetails));
    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-semibold bg-primary-gradient">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you wnat to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleOnSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Priority" className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save task</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
