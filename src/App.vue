<template>
  <div class="app">
    <h1>Task List</h1>

    <!-- Add Task -->
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a task" />
    <button @click="addTask">Add</button>

    <!-- Task List -->
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ done: task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">X</button>
      </li>
    </ul>

    <!-- Filters -->
    <div>
      <button @click="filter = 'all'">All</button>
      <button @click="filter = 'active'">Active</button>
      <button @click="filter = 'completed'">Completed</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const newTask = ref("");
const tasks = ref([]);
const filter = ref("all");

function addTask() {
  if (newTask.value.trim() === "") return;
  tasks.value.push({ text: newTask.value, completed: false });
  newTask.value = "";
}

function removeTask(index) {
  tasks.value.splice(index, 1);
}

const filteredTasks = computed(() => {
  if (filter.value === "active") return tasks.value.filter(t => !t.completed);
  if (filter.value === "completed") return tasks.value.filter(t => t.completed);
  return tasks.value;
});
</script>

<style>
.app { max-width: 400px; margin: 2rem auto; font-family: sans-serif; }
input[type="text"] { width: 70%; margin-right: 0.5rem; }
.done { text-decoration: line-through; color: grey; }
button { margin: 0.2rem; }
</style>
