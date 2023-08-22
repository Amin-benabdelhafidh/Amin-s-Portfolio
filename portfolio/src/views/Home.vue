<template>
  <div class="page">
    <div class="code">
    <div class="container">
      <div class="typed-out" id="first"><span class="purple">#include</span> <span class="orange">&lt;stdio.h&gt;</span></div>
    </div><br>
    <div class="container">
      <div class="typed-out" id="second">int <span class="blue">main</span><span class="yellow">(</span>void<span class="yellow">)</span>{</div>
    </div><br>
    <div class="container">
      <div class="typed-out" id="third"><span class="purple">printf</span><span class="yellow">(</span><span class="orange">"Hello, World!<span class="red">\n</span>I am Amin."</span><span class="yellow">)</span>;</div>
    </div><br>
    <div class="container">
      <div class="typed-out" id="fourth"><span class="red">return</span><span class="green"> 0</span>;</div>
    </div><br>
    <div class="container">
      <div class="typed-out" id="last"><span>}</span></div>
    </div><br>
  </div>
    <h2>I'm <a href="https://github.com/Amin-benabdelhafidh" class="light-blue">Amin Benabdelhafidh</a>, a 16 years old fullstack web developer.</h2>
    <h2><router-link :to="{name: 'about'}" class="light-blue">more about me and about this project<i class="bi bi-arrow-up-right"></i></router-link></h2>
    <hr>
    <h2 class="blue">Some of my projects:</h2>
    <div class="projects-box">
      <ProjectBox 
      v-for="project in projects"
      :project="project"
      :key="project.id"/>
    </div>
  </div>

</template>

<script>
  import { useGuestStore } from '@/stores';
  import { mapActions } from 'pinia';
  import axios from 'axios';
  import ProjectBox from '@/components/ProjectBox.vue';


  export default{
    name: 'Home',
    data(){
      return{
        projects: [],
      }
    },
    components:{
      ProjectBox,
    },
    
    mounted(){
      this.get_data()
    },
    methods:{
      ...mapActions(useGuestStore, ["loading"]),
      async get_data(){

        this.loading(true)

        await axios
          .get('/api/v1/projects')
          .then(response => {
            // console.log(response.data)
            this.projects = response.data
          })
          .catch(error=>{
            console.log(JSON.stringify(error))
          })

        this.loading(false)
        
      }
    }
      
  }
</script>

<style scoped>
  h1{
    font-family: monospace;
    color: rgb(14, 111, 175);
  }
  .container{
      display: inline-block;
      width: auto;
      margin: 5px;
      margin-bottom: 1vh !important;
      
    }
    .page{
      width: 100%;
      font-family: monospace;
    }
    h2{
      margin: 2rem 1rem;
      font-size: 2.5rem;
      text-decoration: none !important;
    }
    .typed-out{
      overflow: hidden;
      font-size: 40px;
      white-space: nowrap;
      width: 0;
    }

    #first{
      animation: 
      typing 2s steps(19, end) forwards, flashes 50ms linear 2.2s 1 alternate forwards;
    }
    #second{
      animation: 
      typing 1.68s steps(16, end) 2.3s forwards, flashes 50ms linear 3.98s 1 alternate forwards;
    }
    #third{
      margin-left: 4rem;
      animation: 
      typing 2.52s steps(24, end) 4s forwards, flashes 50ms linear 6.52s 1 alternate forwards;
    }
    #fourth{
      margin-left: 4rem;
      animation: 
      typing 0.945s steps(9, end) 6.6s forwards, flashes 50ms linear 7.465s 1 alternate forwards;
    }
    #last{
      animation: 
      typing 0.11s steps(2, end) 7.6s forwards, flashes 450ms linear 7.71s infinite alternate forwards;
    }

    @keyframes typing {
      0% { width: 0;
        border-right: .15em solid rgb(61, 158, 223);}
      100%{
        width: 100%;
        border-right: .15em solid rgb(61, 158, 223);
      }
    }

    @keyframes flashes{
      0%{border-right: .15em solid rgb(61, 158, 223);}
      50%{border-right: .15em solid rgb(61, 158, 223);}
      51%{border-right: transparent;}
      100%{border-right: transparent;}

    }
    .projects-box{
      margin: 20px auto;
    }

    .light-blue{
        text-decoration: none;
        color: rgb(61, 158, 223) !important;
        
    }

    .purple{
      color: purple !important;
    }
    .yellow{
      color: goldenrod !important;
    }
    .red{
      color: rgb(161, 1, 1) !important;
    }
    .green{
      color: green !important;
    }
    .blue{
      color: rgb(14, 111, 175) !important;
    }
    .orange{
      color: rgb(207, 140, 15) !important;
    }
    .code{
      color: black;
      background-color: rgba(233, 233, 233, 0.644);
      margin: 2rem 1rem;
      border-radius: 1rem;
    }

    hr{
      margin: 1rem;
    }
</style>