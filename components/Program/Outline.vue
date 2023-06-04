<template>
    <div id="ComponentWrapper">
        <div id="flags">
            <div id="flags-box">
                <hr id="flags-box-separator" />
                <div id="flags-wrapper">
                    <ProgramOutlineFlag
                    Text="Get your students connected to a therapist in hours."
                    Color="#FF8854" />
                    <ProgramOutlineFlag
                        Text="Rooted in Diversity, Equity, & Inclusion."
                        Color="#50A060"/>
                    <ProgramOutlineFlag
                        Text="Improve degree persistence and completion."
                        Color="#AEF6F7" />
                    <ProgramOutlineFlag
                        Text="Designed for students, by students. We involve you."
                        Color="#EE6699" />
                </div>
            </div>
        </div>
        <img id="image" src="/bbbb.png" />
    </div>
</template>

<style scoped>
    #ComponentWrapper {
        height: 85vh;
        display: flex;
        position: relative;
    }

    #flags {
        width: 50%;
        height: 100%;
        display: grid;
        place-items: center;
    }

    #flags-box {
        height: 100%;
        display: flex;
        align-items: center;
    }

    #flags-box-separator {
        height: 80%;
        background-color: #000;
    }

    #flags-wrapper {
        width: 80%;
        height: 85%;
        row-gap: 5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    #image {
        right: 12.5%;
        position: absolute;
    }
</style>