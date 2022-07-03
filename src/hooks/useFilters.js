import { useToDoContext } from "../contexts/ToDoContext";

// get active filters from ToDo context
export const useActiveFilters = () => {
  const { activeFilters } = useToDoContext();
  return activeFilters;
};

// filter actions from ToDo context
export const useFilterActions = () => {
  const { setActiveFilters } = useToDoContext();

  // add filter to active filters
  const addFilter = (filter) => {
    setActiveFilters((filters) => [...new Set([...filters, filter])]);
  };

  // remove filter from active filters
  const removeFilter = (filter) => {
    setActiveFilters((filters) => filters.filter((f) => f !== filter));
  };

  // clear all active filters
  const clearFilters = () => {
    setActiveFilters([]);
  };

  return { addFilter, removeFilter, clearFilters };
};
