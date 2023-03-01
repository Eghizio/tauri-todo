import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from "@hello-pangea/dnd";
import { useState } from "react";
import { useTodos } from "../context/TodosContext";
import { Item } from "./Item";

export const List = () => {
  const { todos, reorderTodos } = useTodos();
  const [areDoneHidden, setAreDoneHidden] = useState(false);

  // reordering is bugged when hidden done xd
  const toggleDoneFilter = () => setAreDoneHidden(p => !p);

  const handleDragEnd: OnDragEndResponder = ({ source, destination }, provided) => {
    
    console.log({ source, destination })
    const isSame = source.index === destination?.index;
    if(!destination || isSame) return;

    reorderTodos(source.index, destination.index);
  };

  return (
    <div>
      <div className="filter" onClick={toggleDoneFilter}>
        <span>Hide done</span>
        <input type="checkbox" defaultChecked={areDoneHidden}/>
      </div>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => 
            <ul className="list" ref={provided.innerRef} {...provided.droppableProps}>
              {todos
                .filter(({done}) => !areDoneHidden || !done)
                .map((todo, i) => 
                  <Draggable key={todo.id} draggableId={todo.id} index={i}>
                    {(provided) => 
                      <div
                        className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        <Item todo={todo} />
                      </div>
                    }
                  </Draggable>
                )
              }
              {provided.placeholder}
            </ul>
          }
        </Droppable>
      </DragDropContext>
    </div>
  );
};
