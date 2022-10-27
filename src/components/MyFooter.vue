<template>
    <div class="Footer">
        <router-link to="/">

        <div class="icone">
            <i class="fa-solid fa-landmark"></i>
        </div>
    </router-link>

        <router-link to="/myteam">

        <div class="icone" >
            <i class="fa-regular fa-file"></i>
        </div>
    </router-link>

        <router-link to="/myshared">

        <div class="icone">
            <i class="fa-solid fa-folder-tree"></i>
        </div>
    </router-link>

        <div class="icone">
            <i class="fa-regular fa-user"></i>
        </div>
    </div>
</template>


<script>
export default{
   name:'MyFooter',
  

}

</script>

<style scoped>

.Footer{
    width: 90%;
    margin:  2em auto 0 auto;
    border-radius: 20px;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    padding: .8em;
  
}
.icone{
 color: rgba(255, 255, 255, 0.714);
}

.router-link-active i{
  color: rgb(98, 206, 98);
}


</style>