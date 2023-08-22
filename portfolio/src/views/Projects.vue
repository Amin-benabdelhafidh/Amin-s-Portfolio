<template>
  <ProjectBox 
      v-for="project in projects"
      :project="project"
      :key="project.id"/>
</template>

<script>
  import ProjectBox from '@/components/ProjectBox';
  import { mapActions } from 'pinia';
  import { useGuestStore } from '@/stores';
  import axios from 'axios';

  export default{
    name: 'Projects',
    data(){
      return{
        projects: [],
      }
    },
    components:{
      ProjectBox,
    },
    
    mounted(){
      this.fetch_data()
    },
    methods:{
      ...mapActions(useGuestStore, ["loading"]),
      async fetch_data(){

        this.loading(true)

        await axios
          .get('/api/v1/all_projects')
          .then(response => {
            console.log(response.data)
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