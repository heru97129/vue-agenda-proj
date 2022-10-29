<template>
    <MyHeader />
    <TeamOverView   />
    <MyDepartment :datadesign="datadesign" :datadeve="datadeve" />
  <MyFooter />

</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import TeamOverView from '../components/TeamOverView.vue'
import MyFooter from '../components/MyFooter.vue'
import MyDepartment from '../components/MyDepartment.vue';

export default{
    name:'MyTeam',
    components:{
    MyHeader,
    MyFooter,
    TeamOverView,
    MyDepartment
},
data(){
  return {
   datadeve : '',
   datadesign : '',
  func:this.fetchTasks()


  }

},
methods:{
  async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
     let design=  data.filter(el =>  el.occ == 'design')
     let dev =  data.filter(el =>  el.occ == 'developper')

     this.datadesign = design
     this.datadeve = dev  
     console.log(design,'my team',dev)
   
  },

 

}

}
</script>