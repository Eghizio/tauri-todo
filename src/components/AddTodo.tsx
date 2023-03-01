import { useState } from "react";
import { useTodos } from "../context/TodosContext";

export const AddTodo = () => {
  const { addTodo } = useTodos();
  const [name, setName] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // TODO: handle empty name // hehe get it? todo for todo app xd
    addTodo(name);
    setName("");
  };

  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button className="btn">Add</button>
    </form>
  );
};
