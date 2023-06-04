<script setup lang="ts">
    import { ref } from 'vue';
    import useObserver from '~/composables/Experience/Observer';

    const component: Ref<Element | null> = ref(null);

    onMounted(() => {
        useObserver(component.value as Element);
    });
</script>

<template>
    <div ref="component" id="PageWrapper">
        <ExperienceTop />
        <TopSeparator />
        <ExperienceStats />
        <ExperienceReviews />
        <PageFooter />
    </div>
</template>