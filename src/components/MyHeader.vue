<template>
    <div class="header">
     <img src="images/DERAY+NPG+2K.jpg" alt="">
     <i class="fa-regular fa-bell"></i>
    </div>
</template>

<script>
export default{
    name : 'MyHeader'
}
</script>

<style scoped>
.header{
    width: 90%;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header img{
width: 50px;
height: 50px;
border-radius: 50%;


}

.header i{
    font-size: 1.5em;
    padding: .5em;
    border-radius: 50%;
    background-color: rgba(231, 226, 226, 0.297);
}
</style>