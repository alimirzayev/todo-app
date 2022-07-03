import { useToDoContext } from "../contexts/ToDoContext";

// get the todo id for the editing field
export const useEditingToDoIDValue = () => {
  const { editingToDoID } = useToDoContext();
  return editingToDoID;
};

// get a setter func for the todo id for the editing field
export const useSetEditingToDoID = () => {
  const { setEditingToDoID } = useToDoContext();
  return setEditingToDoID;
};
