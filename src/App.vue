
<script setup>
import { ref } from "vue";
const message = ref("hello, Vue");
const isAdmin = ref(true);
const tasks = ref([
  { name: "task 1", link: "task/1" },
  { name: "task 2", link: "task/2" },
  { name: "task 3", link: "task/3" }
]);
const tasktitle = ref('');
const tasklink = ref('');
const toggleAdmin = () => {
  isAdmin.value = !isAdmin.value;
};
const addTask = () => {
  tasks.value.push({name: tasktitle.value, link: tasklink.value});
  tasktitle.value = '';
  tasklink.value = '';
}
const deletetask = (index) => {
  tasks.value.splice(index, 1);
}
</script>
<template>
  <div class>
    <h1>{{ message }}</h1>
    <p v-if="isAdmin">You are an admin!</p>
    <p v-else>You are not an admin!</p>
    <form @submit.prevent="addTask">
      <label for="tasktitle">Enter task title</label>
      <input type="text" id="tasktitle" name="tasktitle" v-model="tasktitle" required><br>
      <label for="tasklink">Enter task title</label>
      <input type="text" id="tasklink" name="tasklink"  v-model="tasklink" required><br>
      <button type="submit" class="btn">add task</button>
    </form>
    <h3>Tasks</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.name">
        <span>
          Task Name:
          <b>{{ task.name }}</b>
        </span>
        <br />
        <a :href="task.link">Go to Task</a>
        <br />
        <button class="btn" @click="()=>console.log(task.name + ' clicked')">click here</button>
        <button @click="deletetask(index)" class="btn-blue">Delete task</button>
      </li>
    </ul>
    <button class="btn bg-blue-400" @click="toggleAdmin">update admin status</button>
  </div>
</template>
