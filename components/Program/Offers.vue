<template>
    <div id="ComponentWrapper">
        <div id="title">
            <h1>What we offer</h1>
            <img src="" />
        </div>
        <div id="content">
            <div id="box">
                <div id="left">
                    <span>Enhance your existing support systems with our evidence-based virtual therapy program, tailored specifically for teens. We seamlessly integrate our service and make a positive impact on students'</span>
                    <span>Mental Health</span>
                    <img src="/Psychologist.png" />
                </div>
                <div id="mid" class="offer">
                    <div id="mid-title" class="offer-title">
                        <span>For your students</span>
                    </div>
                    <div id="mid-content" class="offer-content">
                        <hr class="offer-edge-line" />
                        <ul id="mid-content-text" class="offer-content-text">
                            <li>
                                <span>Live, weekly process groups facilitated by licensed therapists</span>
                            </li>
                            <li>
                                <span>One-on-one virtual coaching with culturally-competent providers</span>
                            </li>
                            <li>
                                <span>Real-time access to SMS-based care concierge</span>
                            </li>
                            <li>
                                <span>Online community of like-minded peers</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="right" class="offer">
                    <div id="right-title" class="offer-title">
                        <span>For your school team</span>
                    </div>
                    <div id="right-content" class="offer-content">
                        <hr class="offer-edge-line" />
                        <ul id="right-content-text" class="offer-content-text">
                            <li>
                                <span>Access to a network of 100+ providers who can support your students on- and off-hours</span>
                            </li>
                            <li>
                                <span>Data dashboards with actionable insight about your students' wellbeing</span>
                            </li>
                            <li>
                                <span>Seamless escalation and handoff procedures for crisis situations</span>
                            </li>
                            <li>
                                <span>Co-branded marketing materials and proven best practices to ensure successful adoption and utilization</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #ComponentWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.5% 0;
        box-sizing: border-box;
        row-gap: 5vh;
    }

    #title {
        font: 2em 'Oooh Baby';
        margin-left: 10%;
        width: 100%;
        display: flex;
    }

    #content {
        width: 90%;
        flex-grow: 1;
        display: grid;
        border-radius: 20px;
        background-color: #FFF;
    }

    #box {
        width: 95%;
        padding: 2.5% 0;
        place-self: center;
        display: flex;
        column-gap: 5vw;
    }

    #box > div {
        flex: 1;
    }

    #left {
        display: flex;
        flex-direction: column;
    }

    #left > span {
        font-size: 2em;
        font-family: 'Montaga';
    }

    #left > span:nth-child(2) {
        font-family: 'Oooh Baby';
    }

    .offer {
        display: flex;
        flex-direction: column;
        row-gap: 5vh;
    }

    .offer-title {
        font: 400 2em 'Montagu Slab';
    }

    .offer-content {
        display: flex;
    }

    .offer-content span {
        font: 1.5em 'Tsukimi Rounded';
        color: #808080;
    }

    .offer-content-text {
        display: flex;
        row-gap: 5vh;
        flex-direction: column;
    }
</style>