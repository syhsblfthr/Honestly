<script setup lang="ts">
    defineProps({
        size: {
            type: String,
            default: 'unset'
        }
    });
</script>

<template>
    <span>Honestly</span>
</template>

<style scoped>
    span {
        font-size: v-bind(size);
        color: #50A060;
        font-weight: bold;
        font-family: 'Montez';
    }
</style>