<template>
    <div class="Footer">
        <div class="icone">
            <router-link to="/">
            <i class="fa-solid fa-landmark"></i>
        </router-link>
        </div>
        <div class="icone"  @click="teamOver">
        <router-link to="/myteam">
            <i class="fa-regular fa-file"></i>
        </router-link>
        </div>
        <div class="icone">
            <i class="fa-solid fa-folder-tree"></i>
        </div>
        <div class="icone">
            <i class="fa-regular fa-user"></i>
        </div>
    </div>
</template>


<script>
export default{
   name:'MyFooter',
   methods:{
     teamOver(){
        console.log('hey')
     }

   }

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


</style>