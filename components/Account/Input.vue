<script setup lang="ts">
    import type { Ref } from 'vue';
    import { useRouter } from 'vue-router';

    let loggedInState: Ref<Boolean> = useState('login');

    defineProps({
        mode: Boolean
    });

    const username: Ref<HTMLInputElement | null> = ref(null);
    const password: Ref<HTMLInputElement | null> = ref(null);

    const router = useRouter();

    function checkInput() {
        const expectedEmailValue = 'sad catto';
        const expectedUsernameValue = 'psstimanintrovert';
        if (username.value!.value.trim() === expectedEmailValue && password.value!.value === expectedUsernameValue) {
            loggedInState.value = true;

            router.push('/dashboard');
        }
    }
</script>

<template>
    <div id="box-wrapper">
        <div id="box">
            <div id="inner-box">
                <div id="title-wrapper">
                    <div id="title">
                        <span v-if="mode">Welcome back! Can't wait for you to log in and join us back.</span>
                        <span v-else>Join us & unlock authentic connections and support in a safe space for students!</span>
                    </div>
                </div>
                <div id="inputbox-wrapper">
                    <div id="inputbox">
                        <div class="text-input">
                            <input ref="username" class="text-input" type="text" placeholder="Your email address here" />
                        </div>
                        <div class="text-input">
                            <input ref="password" class="text-input" type="password" autocomplete="off" placeholder="Your name here" />
                        </div>
                        <input @click="checkInput" id="submit-input" type="button" value="Join Now" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #box-wrapper {
        height: 85vh;
        display: grid;
    }

    #box {
        width: 90%;
        height: 90%;
        display: grid;
        overflow: hidden;
        position: relative;
        place-self: center;
        border-radius: 20px;
        outline: 2px solid #70A1A0;
    }

    #box::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        filter: brightness(.5);
        background-size: cover;
        background-position: center;
        background-image: url('~/assets/AccountInputBackground.png');
    }

    #inner-box {
        width: 95%;
        z-index: 1;
        height: 95%;
        display: flex;
        place-self: center;
        flex-direction: column;
    }

    #title-wrapper {
        display: grid;
    }

    #title {
        width: 70%;
        text-align: center;
        place-self: center;
    }

    #title > span {
        color: #FFFFCB;
        font: 3em 'Montagu Slab';
    }

    #inputbox-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
    }

    #inputbox {
        row-gap: 5vh;
        display: flex;
        margin-left: 10%;
        align-items: center;
        flex-direction: column;
    }

    .text-input {
        width: 25vw;
        height: 10vh;
        border: none;
        color: #FFF;
        outline: none;
        display: grid;
        /* cursor: pointer; */
        border-radius: 5px;
        font: 1em 'Tsukimi Rounded';
        background-color: rgba(0, 0, 0, .7);
    }

    .text-input > input {
        width: 90%;
        height: 80%;
        place-self: center;
        background-color: transparent;
    }

    #submit-input {
        width: 70%;
        height: 10vh;
        border: none;
        color: #FFF;
        cursor: pointer;
        border-radius: 10px;
        font: 2em 'Rozha One';
        background-color: rgba(0, 0, 0, .7);
    }
</style>