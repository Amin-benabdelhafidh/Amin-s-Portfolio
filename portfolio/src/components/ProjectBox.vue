<template>
    <div class="box">
        <div class="img-box">
            <img :src="project.imgUrl[0]" class="img">
        </div>
        <div class="details">
            <h3 class="">{{ project.title }}</h3>
            <div class="description-box">
                <p>{{ project.description }}</p>
            </div>
        </div>
        <router-link :to="{name: 'Project', params:{title: project.title, id: project.id}}">Learn More <i class="bi bi-arrow-up-right"></i></router-link>
        
    </div>
</template>

<script>
    export default{
        name: 'ProjectBox',
        props: {
            project: Object,
        },
    }
</script>

<style scoped>
    .box{
        font-family: monospace;
        width: 98%;
        height: 300px;
        margin: 20px auto;
        border: 3px rgb(14, 111, 175) solid;
        background-color: rgb(228, 244, 255);
        border-radius: 10px;
        padding: 10px;
        box-shadow: 5px 0px 5px rgba(119, 119, 119, 0.767), 0px 5px 10px rgba(92, 92, 92, 0.842) ;
        transition: box-shadow 400ms;
    }
    .box:hover{
        box-shadow: 5px 0px 5px rgba(27, 27, 27, 0.767), 0px 5px 10px rgba(17, 17, 17, 0.842) ;
    }
    .img-box{
        width: 50%;
        height: 280px;
        float: left;
    }
    .img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border: 1px rgb(14, 111, 175) solid;
        border-radius: 5px;
    }
    .details{
        transform: translateX(10px);
    }
    .description-box{
        height: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 10px;
    }
    
    a{
        text-decoration: none !important;
    }
</style>