import { useState } from "react";
import { Todo } from "../model";
import { Item } from "./Item";

interface Props {
  todos: Todo[];
}

export const List = ({ todos }: Props) => {
  const [areDoneHidden, setAreDoneHidden] = useState(false);

  const toggleDoneFilter = () => setAreDoneHidden(p => !p);

  return (
    <div>
      <div className="filter" onClick={toggleDoneFilter}>
        <span>Hide done</span>
        <input type="checkbox" defaultChecked={areDoneHidden}/>
      </div>
      
      <ul className="list">
        {todos
          .filter(({done}) => !areDoneHidden || !done)
          .map((todo, i) => <Item key={todo.id} todo={todo} />)
        }
      </ul>
    </div>
  );
};