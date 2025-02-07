<script setup>
    import jobData from '@/jobs.json';
    import { ref, defineProps, computed } from 'vue';
    import { RouterLink } from 'vue-router';
    const jobs = ref(jobData);
    const showFull = ref({});
    defineProps({
        limit : {
            type: Number,
            default: 6
        }
    })
    const toggleFull = (jobID)=>{
        showFull.value[jobID] = !showFull.value[jobID];
    }
    const truncateDesc = (desc)=>{
      return desc.substring(0, 90) + '...';
    }

    const getDescription = computed(() => {
    return (job) => showFull.value[job.id] ? job.description : truncateDesc(job.description);
});
    
</script>
<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Job Listing 1 -->
          <div class="bg-white rounded-xl shadow-md relative" v-for="job in jobs.slice(0, limit)" :key="job.id">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
              </div>

              <div class="mb-5">
                {{ getDescription(job) }}
                <a
                  href="#"
                  class="text-green-500 hover:underline"
                  @click.prevent="toggleFull(job.id)"
                  >{{ showFull[job.id] ? 'Read Less' : 'Read More' }}</a>
              </div>

              <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="fa-solid fa-location-dot text-lg"></i>
                  {{ job.location }}
                </div>
                <RouterLink
                  :to="'jobs/'+job.id"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read Details
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <section class="m-auto max-w-lg my-10 px-6" v-if="limit<jobs.length">
      <a
        href="jobs.html"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
      </div>
    </section>
</template>