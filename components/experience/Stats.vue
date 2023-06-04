<script setup lang="ts">
    import { ref, inject } from 'vue';
import useObserver from '~/composables/Experience/Observer';

    const state = reactive({
        visible: false
    });

    const root = ref<Element | null>(null);

    onMounted(() => {
        useObserver().observe(root.value as Element);
    });
</script>

<template>
    <div id="stats-wrapper" ref="root">
        <ul id="content-wrapper">
            <Transition name="stat">
                <li class="content" :show="state.visible">
                    <div class="title">
                        <span>Up to</span>
                        <img src="" />
                    </div>
                    <div class="desc">
                        <span class="text">10 <span class="smaller-text">Students</span></span>
                    </div>
                </li>
            </Transition>
            <Transition name="stat">
                <li class="content" :show="state.visible">
                    <div class="title">
                        <span>Meet</span>
                        <img src="" />
                    </div>
                    <div class="desc">
                        <span class="text">Once <span class="smaller-text">/ Week</span></span>
                    </div>
                </li>
            </Transition>
            <Transition name="stat">
                <li class="content" :show="state.visible">
                    <div class="title">
                        <span>For</span>
                    </div>
                    <div class="desc">
                        <span class="text">60 <span class="smaller-text">Minutes</span></span>
                    </div>
                </li>
            </Transition>
        </ul>
    </div>
</template>

<style scoped>
    #stats-wrapper {
        width: 100%;
        height: 20vh;
        display: grid;
    }

    #content-wrapper {
        width: 80%;
        height: 100%;
        display: flex;
        list-style: none;
        justify-self: center;
        justify-content: space-between;
    }

    .content {
        width: 25%;
        opacity: 0;
        transition: .5s opacity;
    }

    #stats-wrapper .content:nth-child(2) {
        transition-delay: .25s;
    }

    #stats-wrapper .content:last-child {
        transition-delay: .5s;
    }

    #stats-wrapper.show .content {
        opacity: 1;

    }

    .title {
        font-size: 1em;
        color: #717171;
        font-weight: 800;
        font-family: 'Tsukimi Rounded';
    }

    .text {
        font-size: 3em;
        font-family: 'Montagu Slab';
    }

    .smaller-text {
        font-weight: 800;
        font-family: 'Oooh Baby';
    }
</style>