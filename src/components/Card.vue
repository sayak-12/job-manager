<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        bgclass : {
            type: String,
            default: 'bg-gray-100'
        }
    });
</script>
<template>
    <div :class="[bgclass, 'p-6', 'rounded-lg', 'shadow-md']">
        <slot></slot>
    </div>
</template>