import { useTodos } from "../context/TodosContext";

export const Filter = () => {
  const { isDoneFilterEnabled, toggleDoneFilter } = useTodos();
  
  return (
    <div className="filter" onClick={toggleDoneFilter}>
      <span>Hide done</span>
      <input type="checkbox" defaultChecked={isDoneFilterEnabled}/>
    </div>
  );
};