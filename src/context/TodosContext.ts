import { createContext, useContext } from "react";
import { Todo } from "../model";

interface TodosContextValue {
  todos: Todo[];
  addTodo: (name: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodosContextValue | undefined>(undefined);

export const useTodos = () => {
  const ctx = useContext(TodosContext);

  if (!ctx) throw new Error("Todos Context should be used within TodosProvider!");

  return ctx;
};
