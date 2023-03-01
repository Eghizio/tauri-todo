import { AddTodo } from "../components/AddTodo";
import { List } from "../components/List";
import { Title } from "../components/Title";
import "../Todo.css";

export const Todo = () => (
  <div className="app">
    <Title/>
    <AddTodo />
    <List />
  </div>
);