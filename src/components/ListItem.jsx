import React from "react";

import { useSetEditingToDoID } from "../hooks/useEditingToDoID";
import { useToDoActions } from "../hooks/useToDos";

const ListItem = ({ todo }) => {
  const setEditingToDoID = useSetEditingToDoID();
  const { toggleToDoStatus, removeToDo } = useToDoActions();

  return (
    <div className="list-item">
      <div className="list-item-title">
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through", color: "red" }
              : { textDecoration: "none", color: "black" }
          }
        >
          {todo.title}
        </p>
      </div>
      <div className="list-item-buttons">
        <div className="list-item-checkbox">
          <input
            defaultChecked={todo.completed}
            onChange={() => toggleToDoStatus(todo.id)}
            type="checkbox"
            name=""
            id=""
          />
        </div>

        <div
          className="list-item-edit"
          onClick={() => setEditingToDoID(todo.id)}
        >
          <img
            src="https://icon-library.com/images/pencil-png-icon/pencil-png-icon-9.jpg"
            alt=""
          />
        </div>

        <div onClick={() => removeToDo(todo.id)} className="list-item-trash">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1869/1869668.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
