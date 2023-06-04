<template>
    <div id="ComponentWrapper">
        <div id="centerWrapper">
            <div id="title">
                <h1>Trusted by students at over 200 schools!</h1>
                <img src="~/assets/arrow-pointer2.png" />
            </div>
            <ul>
                <li>
                    <img src="~/assets/telkom.png" />
                </li>
                <li>
                    <img src="~/assets/prime-one.png" />
                </li>
                <li>
                    <img src="~/assets/sutomo.png" />
                </li>
                <li>
                    <img src="~/assets/harapan.png" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    #ComponentWrapper {
        height: 50vh !important;
        display: grid;
    }

    #centerWrapper {
        width: 90%;
        height: 100%;
        place-self: center;

        display: flex;
        flex-direction: column;
        row-gap: 20%;
    }

    #title {
        display: flex;
        column-gap: 2.5%;
        font-family: 'Oooh Baby';
    }

    #centerWrapper > ul {
        height: 100%;
        display: flex;
        column-gap: 10%;
        list-style: none;
        align-items: center;
        border-radius: 20px;
        justify-content: center;
        background-color: #FFF;
    }

    #centerWrapper > ul > li {
        height: 70%;
    }

    #centerWrapper > ul > li > img {
        max-height: 100%;
    }
</style>