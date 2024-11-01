<template>
  <div class="bg-white border border-dashed">
    <div class="task-list-head mb-3 border border-dashed p-5 grid lg:grid-cols-2 grid-cols-1 items-center">
      <h2 class="font-monoton text-4xl font-bold lg:mb-0 mb-3">TASK LIST :</h2>
      <div class="filter-by flex lg:flex-row flex-col justify-end gap-2 lg:gap-3 items-center">
        <select v-model="filterPriority" class="w-full shadow-lg p-4 rounded-lg">
          <option value="">All Priorities</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select v-model="filterStatus" class="w-full shadow-lg p-4 rounded-lg">
          <option value="">All Statuses</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
    </div>


    <ul class="task-listing">
      <li v-for="task in filteredTasks" :key="task.id" :class="taskPriorityColor(task.priority)">
        <input type="checkbox" v-model="task.completed" @change="toggleCompletion(task.id)" />
        <span>{{ task.title }}</span> - <span>{{ task.priority }}</span> - <span>{{ task.status }}</span>
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
.bg-red-500 {
  background-color: rgb(255, 3, 3);
}

.bg-yellow-500 {
  background-color: rgb(245, 219, 21);
}

.bg-green-500 {
  background-color: rgb(27, 223, 27);
}
</style>