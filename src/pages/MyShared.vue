<template>
  <div class="container-shared">
<MyHeader />
<DocumentShared @add-task="addTask" :dataTask="taskData" :dataProfil="taskProfil"/>
<MyFooter />
</div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue';
import MyFooter from '../components/MyFooter.vue';
import DocumentShared from '@/components/DocumentShared.vue';


export default{
    name:'MyShared',
    components:{
    MyHeader,
    MyFooter,
    DocumentShared
   },
   data(){
    return{
        tasks:[],
        taskData:[],
        taskProfil:[]
    
    }
   },
   mounted(){
        this.fetchTasks()
        this.fetchProfil()
   },
   methods:{


    async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
    //  consult
    let consult =  data.filter(el =>  el.task === true)
     this.taskData = consult
    console.log(this.taskData,'fetch shared')
      return this.taskData
     },

     async fetchProfil(){
     const res = await fetch(`http://localhost:5000/Profils`)
     const data = await res.json()
    // profil false
    let profil =  data.filter(el =>  el.profil === false)
     this.taskProfil = profil
    console.log(this.taskProfil,'fetch shared')
      return this.taskProfil
     },

     async addTask(task){
      const res = await fetch('http://localhost:5000/tasks',{
        method:'POST',
        headers :{
          'content-type' :'application/json',
        },
        body: JSON.stringify(task)

      })
     let data = res.json()
    console.log(data,'data',this.taskData)
        console.log(this.dataProfil,'profil')
       this.tasks = [...this.tasks,data]
       location.reload()
     },
   }

}

</script>
<style scoped>

.container-shared{
 
}

</style>