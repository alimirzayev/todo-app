import React from "react";
import ListItem from "./ListItem";

import { useToDos, useToDoActions } from "../hooks/useToDos";
import { useTags } from "../hooks/useTags";
import { useActiveFilters, useFilterActions } from "../hooks/useFilters";

const List = () => {
  const todos = useToDos();
  const tags = useTags();
  const activeFilters = useActiveFilters();
  const { removeToDo, toggleToDoStatus } = useToDoActions();
  const { addFilter, removeFilter, clearFilters } = useFilterActions();

  return (
    <section className="list-section">
      <div className="list-heading">
        <h3>To Do List</h3>
      </div>

      <div className="list-tags-container">
        <p>Filter By Tags: </p>
        {Array.from(tags).map((tag) => (
          <div className="list-tags" key={tag}>
            <button onClick={() => addFilter(tag)}>{tag.toUpperCase()}</button>
          </div>
        ))}
      </div>

      {activeFilters?.length > 0 && (
        <div className="list-tags-container">
          <p>Active Filters: </p>
          {activeFilters.map((tag) => (
            <div className="list-tags selected-tags" key={tag}>
              <button onClick={() => removeFilter(tag)}>
                {tag.toUpperCase()}
              </button>
            </div>
          ))}

          <button className="clear-filter" onClick={() => clearFilters()}>
            Clear Filter
          </button>
        </div>
      )}

      <div className="list-container">
        {todos.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              todo={todo}
              handleDelete={removeToDo}
              handleComplete={toggleToDoStatus}
              setEditingToDoID={() => {}}
            />
          );
        })}
      </div>
    </section>
  );
};

export default List;
