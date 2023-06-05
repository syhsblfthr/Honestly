<template>
    <div class="ComponentWrapper">
        <div id="title">
            <span>Introducing The...</span>
        </div>
        <div id="box">
            <div id="box-edge-line">
                <hr />
            </div>
            <div id="content">
                <div id="content-wrapper">
                    <div class="persons">
                        <div class="person">
                            <img class="person-image" src="~/assets/people/sabitha-sarah.png" />
                            <div class="person-text">
                                <span class="person-name">Sabitha Sarah</span>
                                <span class="person-description">Co-Founder, Head of Student Support, Director of Counseling Services</span>
                            </div>
                        </div>
                        <div class="person">
                            <img class="person-image" src="~/assets/people/syahsabili-fithra.png" />
                            <div class="person-text">
                                <span class="person-name">Syahsabili Fithra</span>
                                <span class="person-description">Co-Founder, Technology and Innovation Specialist, Director of Program Development</span>
                            </div>
                        </div>
                    </div>
                    <div id="team-text">
                        <span>T</span>
                        <span>.</span>
                        <span>E</span>
                        <span>.</span>
                        <span>A</span>
                        <span>.</span>
                        <span>M</span>
                    </div>
                    <div class="persons">
                        <div class="person">
                            <img class="person-image" src="~/assets/people/ibnu-adha.png" />
                            <div class="person-text">
                                <span class="person-name">Ibnu Adha</span>
                                <span class="person-description">Director of Community Engagement, Content Manager, Student Outreach Coordinator</span>
                            </div>
                        </div>
                        <div class="person">
                            <img class="person-image" src="~/assets/people/farid-alvaro.png" />
                            <div class="person-text">
                                <span class="person-name">Farid Alvaro</span>
                                <span class="person-description">Research and Evaluation Specialist, Volunteer Coordinator, Administrative Assistant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .ComponentWrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20vh;
    }

    #title {
        width: 100%;
        height: 10vh;
        text-align: center;
        font: 3em 'Schoolbell';
        color: #50A060;
    }

    #box {
        width: 80%;
        height: 90vh;
        display: flex;
        background-color: #000;
    }

    #box-edge-line {
        margin-left: 5%;
        background-color: #717171;
    }

    #content {
        width: 100%;
        height: 100%;
        display: grid;
    }

    #content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 95%;
        height: 80%;
        place-self: center;

        color: #FFF;
    }

    #team-text {
        font: bold 3em 'Montagu Slab';
        text-align: center;
    }

    #team-text > span:first-child {
        color: #FF8854;
    }

    #team-text > span:nth-child(2) {
        color: #C3807A;
    }

    #team-text > span:nth-child(3) {
        color: #EE6699;
    }
    
    #team-text > span:nth-child(4) {
        color: #C85146;
    }

    #team-text > span:nth-child(5) {
        color: #AEF6F7;
    }

    #team-text > span:nth-child(6) {
        color: #812C35;
    }

    #team-text > span:last-child {
        color: #50A060;
    }

    .persons, .person, .person-text {
        display: flex;
    }

    .person {
        column-gap: 5%;
    }

    .person-text {
        flex-direction: column;
        justify-content: center;
    }

    .person-image {
        border-radius: 999999px;
    }
    .person-name {
        font: 3em 'Montez';
    }

    .person-description {
        font-family: 'Montaga';
    }
</style>