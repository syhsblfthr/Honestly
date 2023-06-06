<script setup lang="ts">
    import { computed } from 'vue';

    const loggedInState = useState('login');

    const loggedIn = computed(() => loggedInState.value);
</script>

<template>
    <div class="ComponentWrapper">
        <div v-if="loggedIn" class="box" id="profile">
            <div id="username-wrapper">
                <span id="username">Administrator</span>
            </div>
            <img id="profile-picture" src="~/assets/Account/profile-picture.png" />
        </div>
        <div v-else class="box" id="account-management">
            <NuxtLink to="/account/login">Login</NuxtLink>
            <NuxtLink to="/account/signup">Sign Up</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
    .ComponentWrapper {
        flex: 1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .box {
        width: fit-content;
        height: 80%;
        display: flex;
        align-items: center;
    }

    #profile {
        column-gap: 5%;
        padding: 0 5%;
        box-sizing: border-box;
        color: #7A324D;
        border-radius: 10px;
        font: 2em 'Montaga';
        background-color: #EACA77;
        justify-content: space-around;
    }

    #profile-picture {
        height: 90%;
        border-radius: 9999px;
    }

    #account-management {
        column-gap: 2.5%;
    }

    /* <NuxtLink> get rendered to <a> */
    #account-management > a {
        width: 15vw;
        height: 8vh;
        display: grid;
        color: #1A4E54;
        place-items: center;
        border-radius: 10px;
        text-decoration: none;
        font: 800 2em 'Schoolbell';
    }

    #account-management > a:first-child {
        background-color: #FF8854;
    }

    #account-management > a:last-child {
        background-color: #50A060;
    }

    #fade-enter-active,
    #fade-leave-active {
        transition: 1s opacity;
    }

    #fade-enter-from,
    #fade-leave-to {
        opacity: 0;
    }
</style>