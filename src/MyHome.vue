<template>
<div>
    <MyHeader  />
    <TeamManagement  :nbrDev="lengthodev"  :nbrConsult="lengthoconsult" :nbrEmploye="lengthoemploye"/>
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
        consultData:'',
        devopsData:'',
        employeData:'',

        lengthoconsult:0,
        lengthodev:0,
        lengthoemploye:0,

        funct:this.fetchTasks(),

    }
   },
   methods:{
      async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
     console.log(data,'fjkjkljkljlk')
    //  consult
    let consult =  data.filter(el =>  el.myConsultant == true)
    let devops =  data.filter(el =>  el.myDev == true)
    let employer =  data.filter(el =>  el.myemployer == true)

    // data after filter 
    this.employeData = employer
    this.devopsData = devops
    this.consultData = consult
    
     this.NbrOfConsultant()
     this.NbrOfDev()
     this.NbrOfEmployer()

     },

    NbrOfConsultant(){ 
     this.lengthoconsult =  this.consultData.length  
    },
    NbrOfDev(){ 
     this.lengthodev =  this.devopsData.length  
    },
    NbrOfEmployer(){ 
     this.lengthoemploye =  this.employeData.length  
     console.log(this.lengthoemploye)
    },
}
}
</script>