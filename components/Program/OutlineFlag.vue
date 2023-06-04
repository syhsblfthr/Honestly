<script setup lang="ts">
    defineProps({
       Text: String,
       Color: String 
    });
</script>

<template>
    <div class="Flag">
        <svg viewBox="0 0 50 50">
            <polygon fill="#FFF" points="0,0 25,25 0,50" />
        </svg>
        <div id="flag-text">
            <span>{{ Text  }}</span>
        </div>
    </div>
</template>

<style scoped>
    .Flag {
        width: 40vw;
        height: 10vh;
        display: flex;
        font-family: 'Montagu Slab';
        background-color: #000;
    }

    #flag-text {
        font-size: 1.4em;
        height: 100%;
        display: flex;
        align-items: center;
        color: v-bind(Color);
    }
</style>