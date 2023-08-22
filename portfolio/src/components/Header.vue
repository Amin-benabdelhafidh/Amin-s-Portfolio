<template>
    <header>
        <h1>Amin Benabdelhafidh</h1>
        <ul>
            <li><LinkButton link="/" text="Home" class="button nav-link"/></li>
        
            <li><LinkButton link="/projects" text="Projects" class="button nav-link"/></li>          
        
            <li><LinkButton link="/about" text="About" class="button nav-link"/></li>          
        </ul>
        <ul class="sign" :class="{'none': Auth, 'block': !Auth}" id="sign">
            <li><router-link class="button" :to="{name: 'LogIn'}"><i class="bi bi-box-arrow-in-right"></i> Log-In</router-link></li>
            <li><router-link class="button" :to="{name: 'SignUp'}"><i class="bi bi-pencil-square"></i> Sign-Up</router-link></li>
        </ul>
        <ul class="sign" :class="{'none': !Auth, 'block': Auth}" id="account">
            <li><router-link class="button" :to="{name: 'Account'}"><i class="bi bi-person-circle"></i> Account</router-link></li>
        </ul>
    </header>      

</template>

<script>
    import LinkButton from './LinkButton'
    import { mapState } from 'pinia';
    import { useGuestStore } from '@/stores';

    export default {
        name: 'Header',
        components: {
            LinkButton,
        },
        data(){
            return {
                Auth: false
            }
        },
        computed: {
            ...mapState(useGuestStore, ['isAuth'])
        },
        mounted(){
            this.Auth = this.isAuth
        },
        updated(){
            this.Auth = this.isAuth
            
        }
  

    }
</script>

<style scoped>
    .none{
        display: none !important;
    }
    .block{
        display: flex !important;
    }
    header{
        display: flex;
        height: 15vh;
        max-width: 100%;
        margin:0;
        padding: 0;
        align-items: center;
        align-content: center;
        background-color: rgb(14, 111, 175);
    }
    ul{
        display: flex;
        margin: 0;
        list-style: none; 
        width: auto;
        height: 100%;

    }
    .li{
        height: 100%;
    }
    h1{
        font-family: "Roboto Condensed";
        margin-left: 4%;
        color: whitesmoke;
        white-space: wrap;
        font-size: 30px;
    }

    .sign{
        margin: auto 20px auto auto;
        
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a{
        text-decoration: none;
    }
    .bi{
        color: gold !important;
    }
    .button{
        color: aliceblue;
        font-size: large;
        margin: auto 7px;
    }
    .button:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 520px) {
        
    }
    @media screen and (max-width: 800px) {
        h1{
            font-size: 25px;
        }

    }
    
    
</style>