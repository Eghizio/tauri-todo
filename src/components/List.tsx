import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from "@hello-pangea/dnd";
import { useTodos } from "../context/TodosContext";
import { Filter } from "./Filter";
import { Item } from "./Item";

export const List = () => {
  const { todos, reorderTodos } = useTodos();

  const handleDragEnd: OnDragEndResponder = ({ source, destination }, provided) => {
    console.log({ source, destination });

    const isSame = source.index === destination?.index;
    if(!destination || isSame) return;

    reorderTodos(source.index, destination.index);
  };

  return (
    <div>
      <Filter />
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => 
            <ul className="list" ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, i) => 
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
