<!-- src/components/TaskForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" class=" text-lg p-5 rounded-lg shadow mb-10 grid lg:grid-cols-4 grid-cols-1 items-center gap-5">
    <div class="mb-3">
      <label for="task-title">Task Title</label>
      <input class="w-full shadow-lg p-3 rounded-lg" type="text" id="task-title" v-model="title" placeholder="Write Task Title Here" required />
    </div>
    <div class="mb-3">
      <label for="priority">Select Priority</label>
      <select v-model="priority" class="w-full shadow-lg p-4 rounded-lg">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="status">Select Status</label>
      <select v-model="status" class="w-full shadow-lg p-4 rounded-lg">
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
    <button type="submit" class="bg-black text-white py-2 rounded-lg mt-5">Add Task</button>
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