import { useMemo } from "react";

import { useToDoContext } from "../contexts/ToDoContext";

// get all tags from ToDo context
export const useTags = () => {
  const { todos } = useToDoContext();
  const tags = useMemo(() => {
    const tags = todos.reduce((acc, toDo) => [...acc, ...toDo.tags], []);
    return [...new Set(tags)];
  }, [todos]);

  return tags;
};
