<template>
    <div id="navigationBar">
        <div id="leftSide">
            <div id="logo">
                <NuxtLink to="/">
                    <img src="/logo.svg" />
                </NuxtLink>
            </div>
            <ul id="navigation">
                <li>
                    <NuxtLink to="/experience">Experience</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/program">Our Program</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/team">T.E.A.M.</NuxtLink>
                </li>
            </ul>
        </div>
        <div id="rightSide">
            <NuxtLink to="/account/login">
                <span>Login</span>
            </NuxtLink>
            <NuxtLink to="/account/signup">
                <span>Join Now</span>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
    #navigationBar {
        z-index: 1;
        width: 100%;
        height: 15vh;
        flex-shrink: 0;
        padding: 0 2.5%;
        overflow: hidden;
        box-sizing: border-box;
        background-color: #AEF6F7;
        justify-content: space-between;
        box-shadow: 0px 1px 50px rgba(0, 0, 0, .4);
    }

    #navigationBar, #leftSide, #rightSide {
        display: flex;
        align-items: center;
    }

    #leftSide, #rightSide {
        height: 100%;
    }

    #leftSide {
        width: 50%;
    }

    #logo {
        height: 80%;
    }

    #logo img {
        max-height: 100%;
    }

    #navigation {
        display: flex;
        list-style: none;
        align-items: center;
        column-gap: 10%;
        width: 60%;
        font-family: 'Schoolbell';
    }

    #navigation a {
        font-size: 1.5em;
        font-weight: 800;
        color: #EE6699 !important;
        text-decoration: none !important;
    }

    #rightSide {
        width: 30%;
        column-gap: 5%;
    }

    #rightSide > a {
        width: 50%;
        height: 50%;
        border: none;
        display: grid;
        color: #1A4E54;
        font-size: 1.8em;
        place-items: center;
        text-decoration: none;
        border-radius: 10px;
        font-family: 'Schoolbell';
        background-color: var(--btn-color);
    }

    #rightSide > a:first-child {
        --btn-color: #FF8854;
    }

    #rightSide > a:last-child {
        --btn-color: #50A060;
    }
</style>