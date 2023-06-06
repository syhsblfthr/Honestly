<template>
    <div class="review">
        <div class="box">
            <div class="edge-line">
                <hr />
            </div>
            <div class="text">
                <div class="title">
                    <span>Their Experience...</span>
                </div>
                <div class="content">
                    <div class="heading">
                        <span>Finally, a platform that cuts through the noise and offers genuine solace.</span>
                    </div>
                    <div class="body">
                        <span>This website has been instrumental in my journey of reclaiming my mental health. Honestly provclasses a refreshingly honest, relatable, and empowering environment for students grappling with anxiety and the incessant need to please. Through authentic conversations and a supportive community, Honestly has given me the resilience to overcome my struggles. I'm very grateful to have found this website.</span>
                    </div>
                </div>
            </div>
            <div class="image-wrapper">
                <img src="~/assets/their-experience.png" />
                <div class="who">
                    <img src="~/assets/Namira.png" />
                    <span class="name">Riany Putri Nst.</span>
                </div>
            </div>
        </div>
    </div>
    <div class="review">
        <div class="box" rtl>
            <div class="edge-line">
                <hr />
            </div>
            <div class="text">
                <div class="title">
                    <span>Hear what they experienced</span>
                </div>
                <div class="content">
                    <div class="heading">
                        <span>Honestly was helping me thoroughly during my burnouts, I'm thankful!</span>
                    </div>
                    <div class="body">
                        <span>Burnouts used to be my constant companion, until I discovered this incredible website. It's a haven for overwhelmed students like me, The support I found here was a lifeline, enabling me to confront the pressures I face head-on. It's not just a band-aclass solution—it's a community that empowers, uplifts, and truly understands the struggles we go through. If you're seeking a genuine, no-nonsense space for mental health support, look no further.</span>
                    </div>
                </div>
            </div>
            <div class="image-wrapper">
                <img src="~/assets/hear-experience.png" />
                <div class="who">
                    <img src="~/assets/SIS.png" />
                    <span class="name">Kevin Nicolas</span>
                </div>
            </div>
        </div>
    </div>
    <div class="review">
        <div class="box">
            <div class="edge-line">
                <hr />
            </div>
            <div class="text">
                <div class="title">
                    <span>What they got</span>
                </div>
                <div class="content">
                    <div class="heading">
                        <span>Anxiety no more. Authenticity and understanding. Worth every moment.</span>
                    </div>
                    <div class="body">
                        <span>I can't emphasize enough how much this website has altered my mental health journey. Honestly is a sanctuary where authenticity reigns supreme. Provclassed me with a safe space to open up about my struggles, fostering a sense of belonging and understanding among my fellow students. By addressing anxiety head-on, Honestly has given me the tools to conquer my fears and pressures. It's a game-changer, plain and simple.</span>
                    </div>
                </div>
            </div>
            <div class="image-wrapper">
                <img src="~/assets/what-they-got.png" />
                <div class="who">
                    <img src="~/assets/santo-thomas.png" />
                    <span class="name">Jonathan Calvin</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .review {
        margin: 10% 0%;
        display: grid;
        width: 100%;
        height: 85vh;
    }

    .box {
        width: 90%;
        height: 95%;
        display: flex;
        place-self: center;
        justify-content: space-between;
        flex-direction: row-reverse;
    }
    
    .box[rtl] {
        flex-direction: row;
    }

    .edge-line, .edge-line > hr {
        width: .5px;
        height: 100%;
        background-color: .000;
        opacity: .5;
    }

    .text {
        width: 50%;
        display: flex;
        flex-direction: column;
        row-gap: 10%;
    }

    .title {
        font-size: 4em;
        font-family: 'Oooh Baby';
    }

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .heading {
        font-size: 3em;
        font-family: 'Rozha One';
    }

    .body {
        font-size: 1em;
        font-family: 'Tsukimi Rounded';
    }

    .image-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .image-wrapper > img {
        max-height: 80%;
    }

    .who {
        width: 100%;
        display: flex;
        margin-top: 5%;
        font: 3em 'Oooh Baby';
        justify-content: space-between;
    }

    .name {
        height: 100%;
        display: grid;
        align-items: center;
    }

    .box[rtl='true'] .who {
        flex-direction: row;
    }
</style>