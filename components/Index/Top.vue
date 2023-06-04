<template>
    <div id="topWrapper">
        <div id="leftSide">
            <div id="leftSideBox">
                <div id="text">
                    <div id="title">
                        <h1>Embrace yourself,<br /><span id="stylizedSpeakText">Speak</span> up!</h1>
                    </div>
                    <div id="desc">
                        <p>Supporting your well-being, anytime, anywhere, anyone.<br />Connect with licensed therapists and a supportive community for the help you need.</p>
                    </div>
                </div>
                <div id="button">
                    <button type="button">
                        <span>Learn more about us!</span>
                    </button>
                </div>
            </div>
        </div>
        <img id="image" src="/LAnding Pag.png" />
    </div>
</template>



<style scoped>
    #topWrapper {
        width: 100%;
        height: 85vh;
        display: flex;
        color: #1A4E54;
        position: relative;
        align-items: center;
    }

    #leftSide {
        width: 80%;
        height: 100%;
        display: grid;
        place-items: center;
    }

    #leftSideBox {
        width: 80%;
        row-gap: 10vh;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    #title > h1 {
        font: 3em 'Montagu Slab';
    }

    #stylizedSpeakText {
        font-family: 'Satisfy';
    }

    #desc > p {
        width: 80%;
        font-weight: 600;
        text-align: justify;
        font: 1.4em 'Tsukimi Rounded';
    }

    #button {
        width: 100%;
        height: 20%;
    }

    #button > button {
        width: 40%;
        height: 10vh;
        color: #1A4E54;
        border-radius: 20px;
        background-color: #FF8854;
        font: 600 1.7em 'Tsukimi Rounded';
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    #image {
        right: 5%;
        position: absolute;
    }
</style>