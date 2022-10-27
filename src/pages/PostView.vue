<template>
    <h1>Post {{$route.params.id}}</h1>
    <div class="fiche-perso" >
        <div class="perso-d">


          <div class="nameNfunc">
            <p>  {{dataShared.nom}}</p>
            <p class="func">{{dataShared.profession}}</p>
          </div>

        </div>

      </div>
</template>

<script>
 export default{

    data(){
        console.log(this.$route.params.id)
        return{
            func:this.fetchTasks(),
            dataShared : 20
        }
    },
    methods:{
        async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
     let rightData = data.find(persoData => persoData.nom === this.$route.params.id)

    this.dataShared = rightData
     console.log(this.dataShared,'rightdata')
   
  },

    }

 }

</script>