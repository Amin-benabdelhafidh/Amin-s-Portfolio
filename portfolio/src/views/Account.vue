<template>
    <div class="account">
        <h3>{{ guest.username }}</h3>
        <p>{{ guest.id }}</p>
        <h6>{{ guest.email }}</h6>
        <button @click="logout">logout</button>
    </div>
</template>

<script>
import { useGuestStore } from '@/stores';
import axios from 'axios';
import { mapActions, mapState } from 'pinia';

    export default {
        name: "Account",
        data(){
            return {
                guest: {
                    name: '',
                    id: 0,
                    email: ""
                },
            }
        },
        computed: {
            ...mapState(useGuestStore, ['get_Guest', 'token'])
        },
        mounted(){
            this.guest = this.get_Guest
        },
        methods: {
            ...mapActions(useGuestStore, ['loading', 'removeToken', 'removeUser']),
            
            async logout(){
                this.loading(true)

                // send requeset to destroy token
                await axios
                    .post('/api/v1/token/logout/')
                    .then(response=>{
                        // remove token from store and from localstorage
                        this.removeToken()
                        // remove user informations from store and from local storage
                        this.removeUser()

                        this.$router.push('/')
                        document.getElementById('sign').className.replace("none", "")
                        document.getElementById('account').className += "none"

                    })
                    .catch(error=>{
                        alert('Something went wrong!')
                    })

                this.loading(false)
            }
        }
    }
</script>