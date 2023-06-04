<script setup lang="ts">
    defineProps({
        RTL: String,
        Title: String,
        Heading: String,
        Body: String,
        ImgSrc: String,
        Logo: String,
        Name: String
    });
</script>

<template>
    <div id="review">
        <div id="box" :rtl="RTL">
            <div id="edge-line">
                <hr />
            </div>
            <div id="text">
                <div id="title">
                    <span>{{ Title }}</span>
                </div>
                <div id="content">
                    <div id="heading">
                        <span>{{ Heading }}</span>
                    </div>
                    <div id="body">
                        <span>{{ Body }}</span>
                    </div>
                </div>
            </div>
            <div id="image-wrapper">
                <img v-bind:src="ImgSrc" />
                <div id="who">
                    <img :src="Logo" />
                    <span id="name">{{ Name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #review {
        margin: 10% 0%;
        display: grid;
        width: 100%;
        height: 85vh;
    }

    #box {
        width: 90%;
        height: 95%;
        display: flex;
        place-self: center;
        justify-content: space-between;
        flex-direction: row-reverse;
    }
    
    #box[rtl='true'] {
        flex-direction: row;
    }

    #edge-line, #edge-line > hr {
        width: .5px;
        height: 100%;
        background-color: #000;
        opacity: .5;
    }

    #text {
        width: 50%;
        display: flex;
        flex-direction: column;
        row-gap: 10%;
    }

    #title {
        font-size: 4em;
        font-family: 'Oooh Baby';
    }

    #content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #heading {
        font-size: 3em;
        font-family: 'Rozha One';
    }

    #body {
        font-size: 1em;
        font-family: 'Tsukimi Rounded';
    }

    #image-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #image-wrapper > img {
        max-height: 80%;
    }

    #who {
        width: 100%;
        display: flex;
        margin-top: 5%;
        font: 3em 'Oooh Baby';
        justify-content: space-between;
    }

    #name {
        height: 100%;
        display: grid;
        align-items: center;
    }

    #box[rtl='true'] #who {
        flex-direction: row;
    }
</style>