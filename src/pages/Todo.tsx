import { AddTodo } from "../components/AddTodo";
import { List } from "../components/List";
import { Title } from "../components/Title";
import { useTodos } from "../context/TodosContext";
import "../Todo.css";

export const Todo = () => {
  const { todos, addTodo } = useTodos();

  return (
    <div className="app">
      <Title/>
      <AddTodo add={addTodo} />
      <List todos={todos} />
    </div>
  );
};