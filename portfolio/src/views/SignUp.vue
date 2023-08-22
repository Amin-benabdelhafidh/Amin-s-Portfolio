<template>
    <div class="signup">
        <form @submit.prevent="submitform">
            <label for="guestname">Guestname:</label>
            <input type="text" id="guestname" placeholder="Your name..." v-model="name">
            <label for="guestname">Password:</label>
            <input type="password" id="guestname" placeholder="Your password..." v-model="password">
            <label for="guestname">Confirm Password:</label>
            <input type="password" id="guestname" placeholder="Confirm your password..." v-model="confirm_password">
            <label for="guestname">E-mail(optional):</label>
            <input type="email" id="guestname" placeholder="Your e-mail..." v-model="email">
            <input type="submit" id="submit" value="Sign-Up">
            <h6>If you already have an account you can <router-link :to="{name: 'LogIn'}">Log-In</router-link></h6>
        </form>
    </div>
</template>

<script>
import { useGuestStore } from '@/stores';
import axios from 'axios';
import { mapActions, mapState } from 'pinia';

    export default{
        name: 'SignUp',
        data(){
            return{
                name: '',
                password: "",
                confirm_password: "",
                email: '',
            }
        },
        computed: {
            ...mapState(useGuestStore, ['isAuth'])
        },
        beforeMount() {
            // if the user is already logged-in redirect him/her to the account view 
            if(this.isAuth){
                this.$router.push('/account')
            }
        },
        methods: {
            ...mapActions(useGuestStore, ['loading']),
            // submit the form and sign the user up
            async submitform(){
                this.loading(true)
                // check if the password match the confirmation
                if (this.password === this.confirm_password){
                    const formData = {
                        username: this.name,
                        password: this.password,
                        email: this.email,
                    }
                    // send post request to sign the user up
                    await axios
                        .post('api/v1/users/', formData)
                        .then(response=>{
                            // after successfully signed-up redirect user to login view
                            this.$router.push('/log-in')
                        })
                        .catch(error=>{
                            alert("An error happened \n your password is too common!")
                            
                        })
                } else{
                    alert('Password and Its Confirmation does not match!');
                }

                this.loading(false)
                
            }
        }
    }
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        min-width: 300px;
        margin: 1rem  auto;
        padding: 2rem;
        border: 1px black solid;
        border-radius: 10px;
    }
    input{
        margin-bottom: 1.5rem;
        outline: none;
        border: 1px grey solid;
        border-radius: 5px;
        height: 3rem;
    }
</style>