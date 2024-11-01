import { defineStore } from 'pinia';
import type { Task } from '../types/task';


export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push({ ...task, id: Date.now(), completed: false });
    },
    updateTaskStatus(id: number, status: Task['status']) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.status = status;
    },
    toggleTaskCompletion(id: number) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.completed = !task.completed;
    },
  },
  getters: {
    filteredTasks: (state) => (priority?: string, status?: string) => {
      return state.tasks.filter((task) => 
        (!priority || task.priority === priority) &&
        (!status || task.status === status)
      );
    },
  },
});