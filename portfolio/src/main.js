// This project is developed by Amin Ben Abdelhafidh.............................. 
// Amin's github https://github.com/Amin-benabdelhafidh........................... 
// project's github repository https://github.com/Amin-benabdelhafidh/My-Portfolio 
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App).use(createPinia()).use(router, axios).mount('#app')
