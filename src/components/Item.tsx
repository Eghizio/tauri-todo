import { useTodos } from "../context/TodosContext";
import { Todo } from "../model";
import { SettingsModal } from "./SettingsModal";

interface Props {
  todo: Todo;
}

export const Item = ({ todo }: Props) => {
  const { id, name, done, priority } = todo;
  const { toggleTodo } = useTodos();
  const style = {
    item: done ? "item done" : "item",
    name: done ? "name done" : "name",
    prio: `priority ${priority.toLowerCase()}`,
  };

  return (
    <li className={style.item}>
      <div className="left">
        <input className="checkbox" type="checkbox" checked={done} onChange={() => toggleTodo(id)}/>
        <div>
          <p className={style.name}>{name}</p>  
          <div className={style.prio}/>
        </div>
      </div>
      
      <div className="right">
        <SettingsModal todo={todo}/>
      </div>
    </li>
  );
};
