<script setup lang="ts">
    const loggedIn = useState('login');

    const loggedInState = computed(() => loggedIn.value);

    const bg_color = computed(() => ['#AEF6F7', '#C85146'][Number(loggedIn.value === true)]);
    const fg_color = computed(() => ['#EE6699', '#809F9F'][Number(loggedIn.value === true)]);
</script>

<template>
    <div id="navigationBar">
        <div id="leftSide">
            <div id="logo">
                <NuxtLink to="/">
                    <img src="~/assets/logo.svg" />
                </NuxtLink>
            </div>
            <ul id="navigation">
                <li>
                    <NuxtLink to="/experience">Experience</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/program">Our Program</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/team">T.E.A.M.</NuxtLink>
                </li>
                <li v-if="loggedInState">
                    <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                </li>
            </ul>
        </div>
        <NavbarRightSide />
    </div>
</template>

<style scoped>
    #navigationBar {
        z-index: 1;
        width: 100%;
        height: 10vh;
        flex-shrink: 0;
        padding: 0 2.5%;
        overflow: hidden;
        box-sizing: border-box;
        background-color: v-bind(bg_color);
        justify-content: space-between;
        box-shadow: 0px 1px 50px rgba(0, 0, 0, .4);
    }

    #navigationBar, #leftSide, #rightSide {
        display: flex;
        align-items: center;
    }

    #leftSide, #rightSide {
        height: 100%;
    }

    #leftSide {
        width: 70%;
    }

    #logo {
        height: 80%;
    }

    #logo img {
        max-height: 100%;
    }

    #navigation {
        display: flex;
        list-style: none;
        align-items: center;
        column-gap: 10%;
        width: 60%;
        font-family: 'Schoolbell';
    }

    #navigation a {
        font-size: 1.5em;
        font-weight: 800;
        color: v-bind(fg_color) !important;
        text-decoration: none !important;
    }
</style>