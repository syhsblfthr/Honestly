<template>
    <div id="footer-wrapper">
        <div id="top">
            <div id="top-wrapper">
                <Logo size="2em" />
                <span id="top-text"><span id="embedded-text">Igniting</span> hope and healing for young minds.</span>
            </div>
        </div>
        <div id="mid">
            <div id="privacy">
                <hr />
                <div id="title">
                    <span>We respect your privacy.</span>
                </div>
                <div id="content">
                    <div id="image">
                        <img src="~/assets/Shield.png" />
                    </div>
                    <div id="text">
                        <span>Activity Monitoring</span>
                        <span>Data Encryption</span>
                    </div>
                </div>
            </div>
            <div id="suicide">
                <hr />
                <div id="suicide-content">
                    <span id="suicide-text">If you or someone you know is experiencing an emergency or crisis and needs immediate help, call 911 or go to the nearest hospital.<br /></span>
                    <span id="suicide-call">Suicide Prevention Lifeline<br />+ 62 812-8998-xxxx (24/7)</span>
                </div>
            </div>
        </div>
        <div id="bottom">
            <div id="copyright">
                <span>© 2023 Pathetic, Inc.</span>
            </div>
            <ul id="others">
                <li>
                    <span>Terms</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <span>Privacy</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <span>Contact Us</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    #footer-wrapper {
        width: 100%;
        color: #FFF;
        display: flex;
        flex-direction: column;
        background-size: cover;
    }

    #top {
        height: 50vh;
        display: grid;
        align-items: center;
        background-image: linear-gradient(to bottom, #FFFFCB, #111111 70%);
    }

    #top-wrapper {
        width: 50%;
        display: flex;
        margin-top: 2.5%;
        margin-left: 10%;
        align-items: center;
    }

    #top-text {
        width: 70%;
        font-size: 2.25em;
        margin-left: 5%;
        font-family: 'Trocchi';
    }

    #embedded-text {
        font-family: 'Satisfy';
    }

    #mid, #bottom {
        width: 100%;
        display: flex;
        background-color: #111111;
    }

    #mid {
        padding: 0 5%;
        box-sizing: border-box;
        justify-content: space-between;
    }

    #privacy, #suicide {
        width: 40%;
        height: 100%;
    }

    #privacy {
        row-gap: 5vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: 'Rozha One';
    }

    #privacy > hr, #suicide > hr {
        width: 100%;
    }

    #title {
        font-size: 2.5em;
    }

    #content {
        width: 100%;
        display: flex;
        column-gap: 10%;
        align-items: center;
        justify-content: center;
    }

    #text {
        display: flex;
        font-size: 1.5em;
        flex-direction: column;
    }

    #suicide {
        display: flex;
        row-gap: 5vh;
        align-items: center;
        flex-direction: column;
    }

    #suicide-content {
        display: flex;
        row-gap: 5vh;
        flex-direction: column;
    }

    #suicide-text {
        font-size: 1.5em;
        font-family: 'Rozha One';
    }

    #suicide-call {
        font-size: 1.25em;
        font-family: 'Montaga';
    }

    #bottom {
        height: 20vh;
        display: flex;
        padding: 2.5% 5%;
        align-items: flex-end;
        box-sizing: border-box;
        font-family: 'Montaga';
        justify-content: space-between;
    }

    #copyright {

    }

    #others {
        width: 15%;
        display: flex;
        list-style: none;
        justify-content: space-between;
    }
</style>