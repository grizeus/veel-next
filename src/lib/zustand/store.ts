import { create } from "zustand";
import { TaskI } from "@/app/components/task";

type TaskState = "all" | "active" | "completed";

interface FilterState {
  selectedFilter: TaskState;
  filteredTasks: TaskI[];
  tasks: TaskI[];
  setSelectedFilter: (filter: TaskState) => void;
  showAllTasks: () => void;
  filterActive: () => void;
  filterCompleted: () => void;
  setTasks: (tasks: TaskI[]) => void;
  addTask: (task: TaskI) => void;
  removeTask: (id: number) => void;
}

const filterTasks = (tasks: TaskI[], filter: TaskState) => {
  switch (filter) {
    case "active":
      return tasks.filter(task => !task.completed);
    case "completed":
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

const useStore = create<FilterState>((set, get) => ({
  selectedFilter: "all",
  filteredTasks: [],
  tasks: [],

  showAllTasks: () => get().setSelectedFilter("all"),
  filterActive: () => get().setSelectedFilter("active"),
  filterCompleted: () => get().setSelectedFilter("completed"),

  setSelectedFilter: filter => {
    const tasks = get().tasks || [];
    set({
      selectedFilter: filter,
      filteredTasks: filterTasks(tasks, filter),
    });
  },

  setTasks: tasks => {
    const currentFilter = get().selectedFilter;
    set({
      tasks,
      filteredTasks: filterTasks(tasks, currentFilter),
    });
  },

  addTask: task => {
    const currentTasks = get().tasks || [];
    const updatedTasks = currentTasks.concat(task);
    const currentFilter = get().selectedFilter;

    set({
      tasks: updatedTasks,
      filteredTasks: filterTasks(updatedTasks, currentFilter),
    });
  },

  removeTask: id => {
    const currentTasks = get().tasks;
    const updatedTasks = currentTasks.filter(task => task.id !== id);
    const currentFilter = get().selectedFilter;

    set({
      tasks: updatedTasks,
      filteredTasks: filterTasks(updatedTasks, currentFilter),
    });
  },
}));

export default useStore;
