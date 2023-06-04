<template>
    <div class="ComponentWrapper">
        <div id="text">
            <div id="title">
                <span><span id="T">T</span>eam <span id="E">E</span>ffort <span id="A">A</span>ccelerates <span id="M">M</span>iracles.</span>
            </div>
            <div id="quote">
                <span><span class="satisfy">Great</span> things in business are never done by one person;<br /></span>
                <span>they're done by a <span class="satisfy">Team</span> of people<br /></span>
                <span id="author">- Bill Gates</span>
            </div>
        </div>
        <img id="image" src="/ze dream team.png" />
    </div>
</template>

<style scoped>
    .ComponentWrapper {
        height: 85vh;
        display: flex;
        position: relative;
        align-items: center;
        flex-direction: column;
    }

    #text {
        width: 100%;
        height: 50%;
        color: #1A4E54;
        margin-top: 2.5%;
        margin-left: 2.5%;
    }

    #title {
        font: 800 2.5em 'Montagu Slab';
    }

    #T {
        color: #FF8854;
    }

    #E {
        color: #EE6699;
    }

    #A {
        color: #AEF6F7;
    }

    #M {
        color: #50A060;
    }

    #quote {
        font: 800 2em 'Tsukimi Rounded';
    }

    .satisfy {
        font-family: 'Satisfy';
    }

    #author {
        font-family: 'Oooh Baby';
    }

    #image {
        bottom: 0%;
        max-height: 70%;
        position: absolute;
    }
</style>