<template>
    <div class="header">
     <img src="images/DERAY+NPG+2K.jpg" alt="">
     <h2>Hello!<br> <span class="name">{{title}}</span> </h2>
    </div>
</template>

<script>
export default{
    name : 'MyHeader',  
    props: {
        title: String,
        
    },
}
</script>

<style scoped>
.header{
    width: 90%;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
}

.header img{
width: 60px;
height: 60px;
border-radius: 50%;


}

.name {
    color: red;
    }

.header i{
    font-size: 1.5em;
    padding: .5em;
    border-radius: 50%;
    background-color: rgba(231, 226, 226, 0.297);
}
</style>