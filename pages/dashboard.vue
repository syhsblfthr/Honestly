<template>
    <div class="PageWrapper">
        <div id="header">
            <span>Your Statistics</span>
        </div>
        <div id="content">
            <div id="general-statistics">
                <div class="general-statistic">
                    <span class="general-statistic-head">Session Hours</span>
                    <span class="general-statistic-content">68 Hours</span>
                </div>
                <div class="general-statistic">
                    <span class="general-statistic-head">Experts Talked To</span>
                    <span class="general-statistic-content">7 Experts</span>
                </div>
            </div>
            <div id="specialized-statistics">
                <DashboardSStaticSkill
                    title="Social Skills"
                    :skills="[
                        {
                            title: 'Communication',
                            progress: '30%',
                            color: '#6A8C8F'
                        },
                        {
                            title: 'Empathy',
                            progress: '63%',
                            color: '#C05B5C'
                        },
                        {
                            title: 'Sympathy',
                            progress: '46%',
                            color: '#B9B565'
                        },
                        {
                            title: 'Anxiety',
                            progress: '12%',
                            color: '#92A0D2'
                        }
                    ]"
                />
            </div>
        </div>
        <div id="podcasts">
            <div id="podcasts-header">
                <span>Check out the latest podcast about “Improving Social Skills”</span>
            </div>
            <div id="podcasts-videos">
                <div class="podcasts-video">
                    <div class="podcasts-video-thumbnail">
                        <img src="~/assets/podcasts/1.png" />
                    </div>
                    <div class="podcasts-video-title">
                        <span>How to speak up your opinion without worrying about others</span>
                    </div>
                </div>
                <div class="podcasts-video">
                    <div class="podcasts-video-thumbnail">
                        <img src="~/assets/podcasts/2.png" />
                    </div>
                    <div class="podcasts-video-title">
                        <span>Tips to ease your social anxiety when talking to public</span>
                    </div>
                </div>
                <div class="podcasts-video">
                    <div class="podcasts-video-thumbnail">
                        <img src="~/assets/podcasts/3.png" />
                    </div>
                    <div class="podcasts-video-title">
                        <span>Things you should know about public speaking</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .PageWrapper {
        height: 85vh;
        display: flex;
        padding: 2.5%; /* Figma: 50px */
        flex-direction: column;
        row-gap: 2.5px; /* Figma: 10px */
        font-weight: 600;
        overflow-y: scroll;
        font-family: 'Tsukimi Rounded';
    }

    #header {
        /* display: flex; */
        width: 100%;
        font-size: 2.5em;
    }

    #content {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        padding: 2.5%; /* Figma: 10px */
        /* padding-left: 5%; Figma: 50px */
    }

    #general-statistics {
        width: 100%;
        padding: 2.5%; /* Figma: 10px */
        justify-content: center;
        box-sizing: border-box;
        display: flex;
        border-bottom: 2px solid #000;
        column-gap: 2.5%;
    }

    .general-statistic {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        row-gap: 2.5%;
    }

    .general-statistic-head {
        font-size: 1.8em;
    }

    .general-statistic-content {
        font-size: 1.2em;
    }

    #specialized-statistics {
        display: flex;
        flex-direction: column;
        padding: 2.5% 5%;
    }

    #podcasts {
        width: 100%;
        row-gap: 5vh;
        padding: 10vh 0;
        display: flex;
        flex-direction: column;
    }

    #podcasts-header {
        width: 100%;
        padding-left: 2.5vw;
        box-sizing: border-box;
        font-size: 2em;
        font-weight: 800;
    }

    #podcasts-videos {
        width: 100%;
        display: flex;
        column-gap: 2vw;
        padding: 0 5vw;
        box-sizing: border-box;
    }

    .podcasts-video {
        flex: 1;
        row-gap: 2.5vh;
        display: flex;
        border-radius: 10px;
        flex-direction: column;
        background-color: #F0D18E;
    }

    .podcasts-video-thumbnail {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .podcasts-video-title {
        width: 100%;
        padding: 2.5vh 0;
        display: flex;
        font-size: 1.5em;
        text-align: center;
        justify-content: center;
    }

    .podcasts-video-title > span {
        padding: 0 5%;
        box-sizing: border-box;
    }
</style>