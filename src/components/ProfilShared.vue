<template>
    <div class="container" v-for="(task,index) in Alltasks" :key="index">
    <div class="profil-tasks">
        <div class="infos-left">
         <p>{{task.title}}</p>
         <p>create by {{task.nom}}</p>
        </div>
        <div class="infos-right">
             <p>{{task.date}}</p>
        </div>
    </div>
  </div>
</template>


<script>
export default{
    name:'ProfilShared',
    props:{
        Alltasks:Object
    },
    data(){
     return this.Alltasks
    },
    created(){
        console.log(this.Alltasks)
    }
}
</script>


<style scoped>

.profil-tasks{
    display: flex;
    align-items: center;
    border-radius: 20px;
    justify-content: space-between;
    width: auto;
    margin:0  1em;
    padding: .5em 1em;
    background-color: rgba(0, 0, 0, 0.033);
    margin-bottom: 1em;
}

.profil-tasks p{
    font-size: .8em;

}

.infos-right{
    display: flex;
    justify-content: flex-end;
}

</style>