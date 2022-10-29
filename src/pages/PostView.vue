<template>
    <div class="fiche-perso" >
        <div class="perso-d">


          <div class="profil-user">
            <div class="img-profil">
                <img :src="dataShared.image" alt="">
            </div>
            <h2>{{dataShared.nom}}</h2>
            <p class="func">{{dataShared.status}}</p>
         </div>

            
            <div class="tasks-done">
                <h2>Task</h2>
                <div class="task">
                     <h4>Title : {{dataShared.title}}</h4>
                    <p class="func"> {{dataShared.text}}</p>
                     <p class="date-shared">{{dataShared.date}}</p>
                </div>

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


<style>
.date-shared{
    font-size: .8em ;
    color: rgba(0, 0, 0, 0.607);
}

/* img profil */

.profil-user{
margin: 0 auto;
text-align: center;

}

.img-profil{
width: 70px;
height: 70px;
margin: 0 auto;
margin-bottom: 1em;

}

.profil-user p,.profil-user h2{
    margin: 0;

}
.img-profil img{
    width: 100%;
    height: 100%;
    border-radius: 50%;

}

</style>