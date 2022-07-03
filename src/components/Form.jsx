import React, { useState } from "react";

import { useToDoActions } from "../hooks/useToDos";

const Form = () => {
  const { addToDo } = useToDoActions();
  const [localToDo, setLocalToDo] = useState("");
  const [localTags, setLocalTags] = useState("");

  return (
    <section className="form-section">
      <div className="form-section-heading">
        <h2>To Do Input</h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToDo({ title: localToDo, tags: localTags });
        }}
      >
        <label>
          Add Todo
          <input
            onChange={(e) => setLocalToDo(e.target.value)}
            value={localToDo}
            type="text"
            name="todo"
            placeholder="Enter your todo"
          />
        </label>

        <label>
          Add Tag
          <input
            value={localTags}
            onChange={(e) => setLocalTags(e.target.value)}
            type="text"
            name="tags"
            placeholder="Enter your tags with comma"
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default Form;
