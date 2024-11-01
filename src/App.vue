<!-- src/App.vue -->
<template>
  <div class="container mx-auto p-4">
    <TaskForm />
    <TaskList />
  </div>
</template>

<script setup>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
</script>
