import { ReactNode, useState } from "react";
import { TodosContext } from "./TodosContext";
import { createTodo, Todo } from "../model";
import { toast } from "sonner";

const exampleTodos: Todo[] = [
  { ...createTodo("Make an app for Mac to move all windows to second screen"), priority: "HIGH" },
  { ...createTodo("First todo"), priority: "HIGH" },
  { ...createTodo("Second todo"), status: "IN_PROGRESS" },
  { ...createTodo("Third todo"), done: true },
  { ...createTodo("Fourth todo here with very long name"), priority: "LOW" },
];

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(exampleTodos);

  const addTodo = (name: string) => {
    const todo = createTodo(name);
    setTodos(prev => [todo, ...prev]);
    toast.success("New item added.");
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(t => t.id !== id ? t : { ...t, done: !t.done }));
  };
  
  const editTodo = (todo: Todo) => {
    setTodos(prev => prev.map(t => t.id !== todo.id ? t : todo));
  };
  
  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
    toast("Item removed.");
  };
  
  const value = {
    todos,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
};
