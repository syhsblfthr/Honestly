<script setup>
    useHead({
        title: "Title"
    });
</script>

<template>
    <div id="globalWrapper">
        <NavigationBar />
        <NuxtPage />
    </div>
</template>

<style>
    .page-enter-active,
    .page-leave-active {
        transition: .2s opacity;
    }

    .page-enter-from,
    .page-leave-to {
        opacity: 0;
    }

    #globalWrapper {
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        position: absolute;
        flex-direction: column;
        background-color: #FFFFCB;
    }

    #PageWrapper {
        width: 100%;
        flex-grow: 1;
        overflow: hidden;
        overflow-y: scroll;
    }
</style>
