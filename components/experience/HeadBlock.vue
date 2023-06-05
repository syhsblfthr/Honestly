<template>
    <div id="wrapper">
        <div id="box">
            <div id="innerbox">
                <span>See what our students say about <Logo /></span>
            </div>
        </div>
        <img id="image" src="~/assets/ExperienceTop.png" />
    </div>
</template>

<style scoped>
    #wrapper {
        width: 100%;
        height: 85vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    #box {
        width: 100%;
        height: 40%;
        margin-left: 10%;
        font-family: 'Montagu Slab';
        
        display: grid;
        align-items: center;
    }

    #innerbox {
        width: 50%;
        display: grid;
        padding-left: 2%;
        align-items: center;
        box-sizing: border-box;
        outline: #000 dashed .5vh;

        font-size: 3em;
        color: #1A4E54;
    }

    #innerbox > span {
        font-weight: 800;
    }

    #image {
        bottom: 0;
        max-height: 80%;
        position: absolute;
    }
</style>