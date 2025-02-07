<script setup>
import Hero from '@/components/Hero.vue';
import Homecards from '@/components/Homecards.vue';
import jobListings from '@/components/jobListings.vue';

</script>

<template>
    <Hero title="Vue Developer"/>
    <Homecards/>
    <jobListings :limit="5"/>
</template>