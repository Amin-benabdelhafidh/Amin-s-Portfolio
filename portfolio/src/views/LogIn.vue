<template>
    <div class="login">
        <form @submit.prevent="submitform">
            <label for="guestname">Guestname</label>
            <input type="text" id="guestname" placeholder="Your name..." v-model="name">
            <label for="guestname">Password</label>
            <input type="password" id="guestname" placeholder="Your password..." v-model="password">
            <input type="submit" id="submit" value="Sign-Up">
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useGuestStore } from '@/stores';
import axios from 'axios';

    export default {
        name: 'LogIn',
        computed: {
            ...mapState(useGuestStore, ['guest', 'isAuth', 'token'])
        },
        data(){
            return{
                name: '',
                password: ''
            }
        },
        mounted(){
            // if user is authenticated 
            if(this.isAuth){
                // redirect him/her to the account view
                this.$router.push('/account')
            }
            // set title
            document.title = "Log-In | Amin's portfolio";
            
            
        },
        methods: {
            // get actions from store
            ...mapActions(useGuestStore, ['setToken', 'removeToken', 'loading', 'setUser']),

            // after logging-in => get the user informations for later uses 
            async getuserinfo(){
                await axios
                    .get('/api/v1/users/me/')
                    .then(response=>{
                        // set user informations to the store and to the local storage
                        this.setUser(response.data)
                    })
            },

            // submit form and login user
            async submitform(){
                this.loading(true);

                axios.defaults.headers.common['Authorization'] = "" 
                this.removeToken()

                if(this.name !== '' && this.password !== ""){
                    const formData= {
                        username: this.name,
                        password: this.password
                    }
                    // send form data to the server with post request
                    await axios
                        .post('/api/v1/token/login/', formData)
                        .then(response=>{
                            // get token from response data
                            const token = response.data.auth_token;
                            // set the token to the store and to the local storage
                            this.setToken(token)
                            // set the token to axios Authorization header
                            axios.defaults.headers.common['Authorization'] = "Token " + token

                            this.getuserinfo() // this function is the one above

                            // after successfully logged in redirect user to Home view
                            this.$router.push('/')
                            document.getElementById('account').className.replace("none", "")
                            console.log(document.getElementById('account'))
                            document.getElementById('sign').className += "none"
                            
                        })
                        .catch(error=>{
                            alert('something went wrong!')
                        })

                } else {
                    if(this.name !== ''){
                        alert('guestname field is empty!')
                    } else{
                        alert('password field is empty!')
                    }
                }
            }
        }
    }
</script>