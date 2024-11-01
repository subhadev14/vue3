<!-- src/components/TaskForm.vue -->
<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="title" placeholder="Task Title" required />
      <select v-model="priority">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select v-model="status">
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useTaskStore } from '../stores/taskStore';
  
  const title = ref('');
  const priority = ref('Low');
  const status = ref('To Do');
  const taskStore = useTaskStore();
  
  const handleSubmit = () => {
    taskStore.addTask({ title: title.value, priority: priority.value, status: status.value, id: 0, completed: false });
    title.value = '';
    priority.value = 'Low';
    status.value = 'To Do';
  };
  </script>
  