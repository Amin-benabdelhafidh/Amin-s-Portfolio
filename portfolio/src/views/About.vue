<template>
    <div>
        <a href="#about-me"><h3 class="label">About Me:</h3></a>
        <h5>My name is <a class="developer-name" href="https://github.com/Amin-benabdelhafidh">Amin Benabdelhafidh</a>. My passion is to learn about computers from the software layer down to the hardware layer.<br/>
        I use for development languages like javascript and python to develop web applications from the back-end with <span>Django</span> to the front-end with <span>view.js</span>.<br/> Currently I'm learning about computer networking and computer architecture.</h5>
    </div>
    <div id="container"> 
        <div id="child-container">
            <h1>My Portfolio</h1>
            <h3>Version: <span class="version">1.0.0</span></h3>
            <h6>Developed by&ensp;<a href="https://github.com/Amin-benabdelhafidh">Amin Ben Abdelhafidh</a></h6>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'About',
    }
</script>

<style scoped>
    h1 ,h3, h6{
        font-family: "Roboto Condensed";
        text-align: center;
    }
    .label{
        text-align: start !important;
        margin-left: 1rem; 
    }
    h5{
        margin: 1rem;
        color:rgb(1, 80, 133);
        text-indent: 3rem;
        text-align: justify;
    }
    h5::first-letter{
        color: rgb(0, 26, 48);
        font-size: 1.8rem;
    }
    h1{
        font-size: 50px;
        color: rgb(14, 111, 175);
    }
    h3{
        font-size: 30px;
        color: black;
        margin: 1rem auto .5rem 1rem;
    }
    span{
        color: #000;
        font-size: 1.4rem;
    }
    .version{
        color: rgb(14, 111, 175);
        font-family: monospace;
        font-size: 35px;
    }
    h6{
        font-size: 15px;
        color: black;
    }
    a{
        text-decoration: none;
        color: rgb(61, 158, 223);
        font-size: 16px;
    }
    .developer-name{
        text-decoration: none;
        color: rgb(61, 158, 223) !important;
        font-size: 1.4rem;
        
    }
    #container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    template{
        margin-bottom: 2px;
    }

</style>