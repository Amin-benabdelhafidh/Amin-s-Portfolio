<!-- This project is developed by Amin Ben Abdelhafidh.............................. -->
<!-- Amin's github https://github.com/Amin-benabdelhafidh........................... -->
<!-- project's github repository https://github.com/Amin-benabdelhafidh/My-Portfolio -->

<template>
  <Header/>
  <section id="content-container">
    <router-view></router-view>
  </section>
  <Footer/>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { mapActions, mapState } from 'pinia';
import {useGuestStore}  from './stores';
import axios from 'axios';


  export default{
    name: 'App',
    components: {
      Header,
      Footer
    },
    computed:{
      ...mapState(useGuestStore, ['token', 'isAuth'])
    },
    methods:{
      ...mapActions(useGuestStore, ['initializeStore', "setUserinformations"])
    },
    mounted(){
      this.initializeStore()

      const token = this.token;

      if(token){
        axios.defaults.headers.common['Authorization'] = "Token " + token;
      } else{
        axios.defaults.headers.common['Authorization'] = "";
      }
            
    },
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  min-height: 100vh;
}
#content-container{
  margin-bottom: 12vh;
}
</style>
