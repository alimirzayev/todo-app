import React, { useState, useMemo } from "react";

import { useToDos, useToDoActions } from "../hooks/useToDos"
import { useEditingToDoIDValue } from "../hooks/useEditingToDoID"

const Form = () => {
  const todos = useToDos();
  const editingToDoIDValue = useEditingToDoIDValue();
  const { updateToDo } = useToDoActions();
  const todo = useMemo(() => todos.find((todo) => todo.id === editingToDoIDValue), [todos, editingToDoIDValue]);
  const [localToDo, setLocalToDo] = useState(todo.title);
  const [localTags, setLocalTags] = useState(todo.tags.join(", "));

  return (
    <section className="form-section">
      <div className="form-section-heading">
        <h2>Edit To Do</h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateToDo(todo, {
            title: localToDo, tags: localTags
          });
        }}
      >
        <label>
          Todo
          <input
            onChange={(e) => setLocalToDo(e.target.value)}
            value={localToDo}
            type="text"
            name="todo"
            placeholder="Enter your todo"
          />
        </label>

        <label>
          Tag
          <input
            onChange={(e) => setLocalTags(e.target.value)}
            value={localTags}
            type="text"
            name="tags"
            placeholder="Enter your tags with comma"
          />
        </label>

        <button type="submit">Update</button>
      </form>
    </section>
  );
};

export default Form;
