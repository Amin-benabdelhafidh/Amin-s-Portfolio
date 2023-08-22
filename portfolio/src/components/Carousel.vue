<template>
    <div id="carousel">
        <div v-for="p in photos" class="carousel-box fade">
            <div class="carousel-img-box">
                <img class="carousel-img" :src="p" />
            </div>
        </div>
        <button class="previous" @click="changeslide(-1)"><i class="bi bi-caret-left-fill"></i></button> 
        <button class="next" @click="changeslide(1)"><i class="bi bi-caret-right-fill"></i></button>
    </div>
</template>

<script>

    export default {
        name: "Carousel",
        props: {
            photos: Array,
        },
        data(){
            return{
                index: 0,
                length: 0,
            }
        },
        methods: {
            showSlide(current ,lastIndex, initialize){
                if(this.length === 0){
                    return false
                }
                let slides = document.getElementsByClassName('carousel-box');
                if(!initialize){
                    slides[lastIndex].style.display = 'none';
                }
                slides[current].style.display = 'block';
                
            },

            changeslide(n){
                let lastIndex = this.index
                if(this.index === this.length-1 && n === 1){
                    this.index = 0;
                }else if(this.index === 0 && n === -1){
                    this.index = this.length-1;
                } else{
                    this.index += n;
                }
                this.showSlide(this.index ,lastIndex, false);
            },
                
        },
        // after content loaded
        updated(){
            this.length = document.getElementsByClassName('carousel-box').length;
            
            this.showSlide(0, 0, true)
        }

    }
    
</script>

<style scoped>
    #carousel{
        max-width: 700px;
        max-height: 500px;
        position: relative;
        margin: auto;
    }
    .carousel-box{
        display: none; 
    }
    
    .carousel-img{
        width: 100%;
        height: 80%;
    }
    .previous, .next{
        position: absolute;
        top: 40%;
        background-color: transparent;
        outline: none;
        border: 0px;
        border-radius: 5px;
        font-size: 30px;
        color: rgba(0, 0, 0, .8);
        transition: all 200ms;  
    }
    .previous{
        left: 8px;
    }
    .next{
        right: 8px;
    }
    .previous:hover, .next:hover{
        background-color: rgba(0, 0, 0, .8);
        color: white;
    }

    .fade{
        animation-name: fade;
        animation-duration: 1000ms;
        animation-fill-mode: forwards;
    }

    @keyframes fade{
        from{opacity: .4;}
        to{opacity: 1;}
    }
</style>
