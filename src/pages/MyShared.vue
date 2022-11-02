<template>
<MyHeader />
<DocumentShared @add-task="addTask" :dataTask="taskData"/>
<MyFooter />

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
    
    }
   },
   created(){
        this.fetchTasks()
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



     async addTask(task){
      const res = await fetch('http://localhost:5000/tasks/90681',{
        method:'PUT',
        headers :{
          'content-type' :'application/json',
        },
        body: JSON.stringify(task)

      })
    
      const data = await res.json()
    console.log(data)
      this.task.append([...this.tasks,data])
    console.log(data,'data',this.tasks,'add data')
   
      //  this.tasks = [...this.tasks,data]
     },
   }

}

</script>