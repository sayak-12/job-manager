<!-- 
<script>
export default {
  data(){
    return {
      message : "hello, Vue",
      isAdmin : true,
      tasks : [ {name:"task 1", link: "task/1"}, {name:"task 2", link: "task/2"},{name:"task 3", link: "task/3"}]
    }
  },
  methods:{
    toggleAdmin(){
      this.isAdmin = !this.isAdmin;
    }
  }
}
</script>
<template>
  <h1>{{ message }}</h1>
  <p v-if="isAdmin">You are an admin!</p>
  <p v-else>You are not an admin!</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task.name">
      <span>Task Name: <b>{{ task.name }}</b></span><br>
      <a :href="task.link">Go to Task</a><br>
      <button class="btn" @click="()=>console.log(task.name + ' clicked')">click here</button>
    </li>
  </ul>
  <button class="btn bg-blue-400" @click="toggleAdmin">update admin status</button>
</template>

<style scoped>
h1 {
  color: red;
}
</style> -->

<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Homecards from './components/Homecards.vue';
import jobListings from './components/jobListings.vue';
</script>
<template>
  <Navbar/>
  <Hero title="Vue Developer"/>
  <Homecards/>
  <jobListings :limit="5"/>
</template>