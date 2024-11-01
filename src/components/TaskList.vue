<template>
    <div>
      <select v-model="filterPriority">
        <option value="">All Priorities</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
  
      <select v-model="filterStatus">
        <option value="">All Statuses</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
  
      <ul>
        <li v-for="task in filteredTasks" :key="task.id" :class="taskPriorityColor(task.priority)">
          <input type="checkbox" v-model="task.completed" @change="toggleCompletion(task.id)" />
          {{ task.title }} - {{ task.priority }} - {{ task.status }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { useTaskStore } from '../stores/taskStore';
  
  const filterPriority = ref('');
  const filterStatus = ref('');
  const taskStore = useTaskStore();
  
  const filteredTasks = computed(() =>
    taskStore.filteredTasks(filterPriority.value, filterStatus.value)
  );
  
  const toggleCompletion = (id: number) => {
    taskStore.toggleTaskCompletion(id);
  };
  
  const taskPriorityColor = (priority: string) => {
    return {
      'bg-red-500': priority === 'High',
      'bg-yellow-500': priority === 'Medium',
      'bg-green-500': priority === 'Low',
    };
  };
  </script>
  
  <style scoped>
  .bg-red-500 { background-color: red; }
  .bg-yellow-500 { background-color: yellow; }
  .bg-green-500 { background-color: green; }
  </style>
  