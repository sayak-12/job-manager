import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/jobs.vue";
import NotFound from "@/views/NotFound.vue";
import Jobdetails from "@/views/jobdetails.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs
    },
    {
      path: "/jobs/:id",
      name: "jobdetails",
      component: Jobdetails
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound
    }
  ]
})

export default router;