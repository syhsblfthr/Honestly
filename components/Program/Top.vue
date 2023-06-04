<template>
    <div id="ComponentWrapper">
        <span id="top-text"><span>Most students</span>don't seek help.</span>
        <span id="bottom-text">So WE so week them.</span>
    </div>
</template>

<style scoped>
    #ComponentWrapper {
        position: relative;
        height: 85vh;
        display: grid;
    }

    #ComponentWrapper::before {
        content: '';
        position: absolute;
        width: 100%;
        filter: brightness(.8);
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/ProgramTopBackground.png');
    }

    #top-text {
        font-size: 5em;
        font-weight: 800;
        font-family: 'Montagu Slab';
        transform: translateY(-100%);
        place-self: center;
        position: absolute;
    }

    #top-text > span {
        font-family: 'Satisfy';
    }

    #bottom-text {
        font-size: 2.5em;
        font-family: 'Montagu Slab';
        font-weight: 800;
        margin-bottom: 2.5%;
        margin-left: 5%;
        align-self: end;
    }
</style>