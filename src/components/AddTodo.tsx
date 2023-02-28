import { useState } from "react";

interface Props {
  add: (name: string) => void;
}

export const AddTodo = ({ add }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // TODO: handle empty name // hehe get it? todo for todo app xd
    add(name);
    setName("");
  };

  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button className="btn">Add</button>
    </form>
  );
};