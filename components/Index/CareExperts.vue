<template>
    <div id="wrapper">
        <div id="title">
            <h1>Meet our care experts...</h1>
        </div>
        <div id="splitter">
            <hr />
            <div id="text">
                <h2>A proprietary program, built by expert therapists who understand students.</h2>
                <p>Honestly teams are filled with licensed, culturally-competent therapists who have experience working with youth, adolescents, and college-aged students. Our proprietary program, rooted in the latest evidence-based therapeutic practices, provides students with a safe space to deal with life's challenges.</p>
            </div>
            <div id="image">
                <img src="~/assets/frame42.png" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    #wrapper {
        margin-top: 5%;
        width: 100%;
        height: 85vh;
        padding: 2.5% 5%;
        box-sizing: border-box;
    }

    #title {
        font-family: 'Oooh Baby';
        margin-left: 2.5%;
        margin-bottom: 2.5%;
    }

    #splitter {
        height: 80%;
        display: flex;
        column-gap: 2.5%;
    }

    #splitter > img {
        margin-right: 2.5%;
    }

    #text {
        width: 70%;
        row-gap: 15%;
        display: flex;
        padding: 10% 0;
        flex-direction: column;
        justify-content: space-around;
    }

    #text > h2 {
        width: 70%;
        font-family: 'Rozha One';
        font-size: 2.8em;
    }

    #text > p {
        font-family: 'Tsukimi Rounded';
        font-size: 1.3em;
        width: 80%;
        text-align: justify;
    }

    #image {
        height: 100%;
    }

    #image > img {
        max-height: 100%;
    }
</style>