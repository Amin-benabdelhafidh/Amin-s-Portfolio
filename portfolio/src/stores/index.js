// This project is developed by Amin Ben Abdelhafidh.............................. 
// Amin's github https://github.com/Amin-benabdelhafidh........................... 
// project's github repository https://github.com/Amin-benabdelhafidh/My-Portfolio 
import { defineStore } from 'pinia' 

export const useGuestStore = defineStore('guest', {
    state: () => ({
        guest: {
            name: '',
            id: null,
            email: '',
        },

        isAuthenticated: false,
        token: '',

        isLoading: false
    }),
    getters: {
        get_Guest: (state) => state.guest,
        isAuth: (state) => state.isAuthenticated,
        isloading: (state) => state.isLoading
    },
    actions: {
        // initialize the store;
        initializeStore(){
            if(localStorage.getItem('token')){
                this.token = JSON.parse(localStorage.getItem('token'))
                this.isAuthenticated = true
                this.guest = JSON.parse(localStorage.getItem('userInfo'))
            } else {
                this.token = ''
                this.isLoading = false
            }
        },
        // set user informations to the Store and to the localStorage;
        setUser(data){
            localStorage.setItem('userInfo', JSON.stringify(data))
            this.guest.name = data.username
            this.guest.id = data.id
            this.guest.email = data.email
        },
        // remove user informations from store and from localStorage
        removeUser(){
            localStorage.removeItem('userInfo')
            this.guest.name = ''
            this.guest.id = null
            this.guest.email = ''
        },
        // set the token to the Store and to the localStorage;
        setToken(token){
            localStorage.setItem('token', JSON.stringify(token))
            this.token = token
            this.isAuthenticated = true
        },
        // remove the token from store and from localStorage;
        removeToken(){
            localStorage.removeItem('token')
            this.token = ''
            this.isAuthenticated = false
            
        },
        // is loading?
        loading(status){
            this.isLoading = status
        },
    }
})