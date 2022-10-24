<template>
<div>
    <MyHeader @click="fetchTasks"  />
    <TeamManagement  @click="clickTeam"  :nbrConsult="lengtho"/>
    <DocumentSign />
    <MyFooter />
</div>
   
</template>


<script>
import MyHeader from './components/MyHeader.vue'
import TeamManagement from './components/TeamManagement.vue'
import DocumentSign from './components/DocumentSign.vue'
import MyFooter from './components/MyFooter.vue'

export default{
    name:'MyHome',
    components:{
    MyHeader,
    TeamManagement,
    DocumentSign,
    MyFooter
   },
   data(){
    return{
        task:'',
        lengtho:''

    }
   },
   methods:{
      async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
     console.log(data,'fjkjkljkljlk')
    //  consult
    let consult =  data.filter(el =>  el.myConsultant == true)
     console.log(consult)
    this.task = consult

     },

    clickTeam(){
     this.task.forEach((el)=>{
        
        console.log(el.nom)
      
     })
     this.lengtho = this.task.length
     return{
       lengtho : this.task.length

     }
    
    },
}
}
</script>