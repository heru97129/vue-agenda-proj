<template>
<div>
    <MyHeader  />
    <TeamManagement  :nbrDev="devopsData"  :nbrConsult="consultData" :nbrEmploye="employeData"/>
    <DocumentSign   />
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
        consultData:0,
        devopsData:0,
        employeData:0,
  


        funct:this.fetchTasks(),

    }
   },
   methods:{
      async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
    //  consult
    let consult =  data.filter(el =>  el.myConsultant == true)
    let devops =  data.filter(el =>  el.myDev == true)
    let employer =  data.filter(el =>  el.myemployer == true)
    // data after filter 
    this.employeData = employer.length
    this.devopsData = devops.length
    this.consultData = consult.length

// console.log(this.title.toString())
     },

}
}
</script>