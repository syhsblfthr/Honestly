<script setup lang="ts">
    const props = defineProps({
        mode: Boolean
    });

    const texts = [
        'Join us & unlock authentic connections and support in a safe space for students!',
        'Welcome back! Can\'t wait for you to log in and join us back.'
    ];

    const Text = texts[Number(props.mode)];
</script>

<template>
    <div id="box-wrapper">
        <div id="box">
            <div id="inner-box">
                <div id="title-wrapper">
                    <div id="title">
                        <span>{{ Text }}</span>
                    </div>
                </div>
                <div id="inputbox-wrapper">
                    <div id="inputbox">
                        <input class="text-input" type="text" placeholder="Your email address here" />
                        <input class="text-input" type="text" placeholder="Your name here" />
                        <input type="button" value="Join Now" />
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
        background-image: url('/AccountInputBackground.png');
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
        flex-direction: column;
    }

    .text-input {
        width: 25vw;
        height: 10vh;
        border: none;
        color: #FFF;
        outline: none;
        border-radius: 5px;
        font: 1em 'Tsukimi Rounded';
        background-color: rgba(0, 0, 0, .7);
    }

    .text-input::placeholder {
        margin-left: 15%;
    }
</style>