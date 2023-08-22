<template>
    <router-link :to="link" id="link" class="nav-link"><p>{{ text }}</p></router-link>
    
</template>

<script>
    export default{
        name: 'LinkButton',
        props: {
            text: String,
            link: String,
        }
    }
</script>

<style scoped>
    #link:hover{
        background-color: rgb(61, 158, 223);
    }
    #link{
        display: flex;
        margin: 0px;
        height: 100%;
        background-color: rgb(14, 111, 175);
        justify-content: center;
        align-items: center;
        transition: all 500ms ease-in-out;
        text-decoration: none ;
    }
    p{
        color: white;
        font-family: "Roboto Condensed";
        font-size: 17px;
        margin: auto 20px;
    }
    @media screen and (max-width: 520px) {
        p{
            font-size: 14px;
            margin: auto 12px;
        }
    }
</style>