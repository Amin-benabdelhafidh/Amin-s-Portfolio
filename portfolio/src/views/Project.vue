<template>
    <div class="project">
        <div>
            <div>
                <Carousel :photos="project.imgUrl" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Carousel from '@/components/Carousel'

    export default{
        name: 'Project',
        components: {
            Carousel,
        },
        data(){
            return{
                project: {}
            }
        },
        mounted(){
            this.get_project(this.$route.params.id)
        },
        methods:{
            get_project(id){
                axios
                    .get(`/api/v1/projects/${id}`)
                    .then(response=>{
                        this.project = response.data
                    })
                    .catch(error=>{
                        console.error(error)
                    })
            }
        }

    }
</script>