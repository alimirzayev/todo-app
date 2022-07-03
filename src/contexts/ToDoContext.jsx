import { createContext, useContext, useState, useEffect } from "react";

// get todos from local storage
const storedLocalToDos = localStorage.getItem("myTodos");
const parsedLocalToDos = storedLocalToDos ? JSON.parse(storedLocalToDos) : [];

// create ToDO context
const ToDoContext = createContext({
  todos: parsedLocalToDos,
  setTodos: () => {},
  activeFilters: [],
  setActiveFilters: () => {},
  editingToDoID: null,
  setEditingToDoID: () => {},
});

// create provider for ToDo context
export const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(parsedLocalToDos);
  const [activeFilters, setActiveFilters] = useState([]);
  const [editingToDoID, setEditingToDoID] = useState(null);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContext.Provider
      value={{ todos, setTodos, activeFilters, setActiveFilters, editingToDoID, setEditingToDoID }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

// get values ToDo context
export const useToDoContext = () => {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error("useToDoContext must be used within a ToDoContextProvider");
  }
  return context;
};

// get active filters from ToDo context
export const useActiveFilters = () => {
  const { activeFilters } = useToDoContext();
  return activeFilters;
}
