import { useTodos } from "../context/TodosContext";
import { useDisclosure } from "../hooks/useDisclosure";
import { Todo } from "../model";
import { Cross } from "./icons/Cross";
import { Dots } from "./icons/Dots";
import { Modal } from "./Modal";
import { ToggleButtons } from "./ToggleButtons";

interface Props {
  todo: Todo;
}

export const SettingsModal = ({ todo: { id, name, description, done, priority } }: Props) => {
  const { isOpen, close, open } = useDisclosure();
  const { removeTodo } = useTodos(); 
  // todo add toasts to context ex. on remove

  const emptyChangeHandler = () => {};

  return (
    <>
      <button className="btn-icons" onClick={open}>
        <Dots/>
      </button>

      <Modal isOpen={isOpen} closeModal={close}>
        <div className="modal-header">
          <h3 className="modal-title">{name}</h3>
          <span>edit name icon</span>
          <div className="clickable" onClick={close}>
            <Cross/>
          </div>
        </div>

       
        <div className="modal-body">
          <div className="modal-description">
            <textarea value={description} onChange={emptyChangeHandler} placeholder="Description of the task"/>
          </div>

          <aside className="modal-side">

            <div>
              {/* (joined buttons with active state) */}
              <ToggleButtons />
            </div>

            <div>
              Priority
              {/* with colors */}
              <div>

                <select>
                  <option>Low</option>
                  <option>Normal</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <button>
              <input type="checkbox" onChange={emptyChangeHandler} /> Done
            </button>

            <div className="last">
              <button onClick={() => removeTodo(id)}>
                <Cross/> Delete
              </button>
            </div>

          </aside>
        </div>
      </Modal>
    </>
  );
};