<!-- src/App.vue -->
<template>
  <div class="task-manager p-4 font-inter">
    <div class="container mx-auto p-5 md:p-10 h-[90vh]">
      <h1 class="lg:text-6xl md:text-4xl text-3xl mb-3 text-center font-monoton uppercase">Task Manager</h1>
    <TaskForm />
    <TaskList />
    </div>  
  </div>
</template>

<script setup>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
</script>
