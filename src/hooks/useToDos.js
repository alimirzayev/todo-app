import { useMemo } from "react";

import handleTags from "../utils/handleTags";
import { useToDoContext } from "../contexts/ToDoContext";

// get all todos from ToDo context
export const useToDos = () => {
  const { todos, activeFilters } = useToDoContext();

  const filteredToDos = useMemo(() => {
    if (activeFilters.length === 0) {
      return todos;
    }
    return todos.filter((toDo) => {
      return toDo.tags.some((tag) => activeFilters.includes(tag));
    });
  }, [todos, activeFilters]);
  return filteredToDos;
};

// get todo actions:
// - add todo
// - remove todo
// - update todo
// - toggle todo status
export const useToDoActions = () => {
  const { setTodos, setEditingToDoID } = useToDoContext();

  // add ToDo to list
  const addToDo = (todo) => {
    const formattedToDo = {
      id: new Date().getTime(),
      completed: false,
      title: todo.title,
      tags: handleTags(todo.tags),
    };
    setTodos((todos) => [...todos, formattedToDo]);
  };

  // remove ToDo from list
  const removeToDo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    setEditingToDoID((editingToDoID) => id === editingToDoID ? null : editingToDoID);
  };

  // update ToDo
  const updateToDo = (prevToDo, updatedToDo) => {
    const formattedToDo = {
      ...prevToDo,
      title: updatedToDo.title,
      tags: handleTags(updatedToDo.tags),
    };
    setTodos((todos) =>
      todos.map((todo) => (todo.id === prevToDo.id ? formattedToDo : todo))
    );
    setEditingToDoID(null);
  };

  // toggle ToDo completion status
  const toggleToDoStatus = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { addToDo, removeToDo, updateToDo, toggleToDoStatus };
};
