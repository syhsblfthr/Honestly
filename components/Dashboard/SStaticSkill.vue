<!-- Specialized Statistic Skill Component -->
<script setup lang="ts">
    interface Skill {
        title: String,
        progress: String,
        color: String
    };

    defineProps({
        title: {
            required: true,
            type: String
        },
        skills: {
            required: true,
            type: Array<Skill>
        }
    });
</script>

<template>
    <div class="specialized-statistic">
        <div id="specialized-statistic-title">
            <span>Social Skills</span>
        </div>
        <div id="specialized-statistic-content" ref="skills_parent">
            <div v-for="skill in skills" class="specialized-statistic-skill">
                <div class="specialized-statistic-skill-name">
                    <span>{{ skill.title }}</span>
                </div>
                <div class="specialized-statistic-skill-progress">
                    <div class="specialized-statistic-skill-progress-bar">
                        <div :style="`width: ${skill.progress}; background-color: ${skill.color};`" class="specialized-statistic-skill-progress-thumb"></div>
                    </div>
                    <div class="specialized-statistic-skill-progress-text">
                        <span>{{ skill.progress }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .specialized-statistic {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 2.5%; /* Figma: padding: 0 20px */
        row-gap: 2.5vh; /* Figma: 10px */
    }

    #specialized-statistic-title {
        width: 100%;
        font-size: 2em;
    }

    #specialized-statistic-content {
        width: 100%;
        display: flex;
        row-gap: 2.5vh;
        flex-direction: column;
    }

    .specialized-statistic-skill {
        width: 100%;
        display: flex;
        padding: 0 5%; /* Figma: (padding: 0 50px) */
        column-gap: 15%;
    }

    .specialized-statistic-skill-name {
        height: 100%;
        display: grid;
        place-items: center;
        width: 5vw;
        font-size: 1.5em;
    }

    .specialized-statistic-skill-progress {
        display: flex;
        column-gap: 2.5%; /* Figma: 10px */
    }

    .specialized-statistic-skill-progress-bar {
        width: 30vw;
        height: 100%;
        border-radius: 5px;
        border: 2px solid #000;
    }
    
    .specialized-statistic-skill-progress-thumb {
        height: 100%;
    }

    .specialized-statistic-skill-progress-text {
        height: 100%;
        display: grid;
        place-items: center;
        font-size: 1em;
    }
</style>