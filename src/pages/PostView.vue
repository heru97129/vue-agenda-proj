<template>
    <div class="fiche-perso" >
        <div class="return">
            <router-link to="/myteam" >
            <i class="fa-solid fa-chevron-left"></i>
        </router-link>
        </div>
        <div class="perso-d">
   

          <div class="profil-user">
            <div class="img-profil">
                <img :src="dataShared.image" alt="">
            </div>
            <h2>{{dataShared.nom}}</h2>
            <p class="func">{{dataShared.occ}}</p>
         </div>

            
            <div class="tasks-done">
                <h4 class="task-title">All the tasks you wrote recently</h4>
                <div class="task">
                     <h5>Title : {{dataShared.title}}</h5>
                    <p class="func"> {{dataShared.text}}</p>
                    <div class="date-div">
                        <div class="icone-agenda">
                            <i class="fa-regular fa-calendar-check"></i>
                            <div>
                                <p class="create">Create At</p>
                                <p class="date-shared">{{dataShared.date}}</p>

                            </div>
                        </div>

                    </div>
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
            dataShared : 20,
            image:''
        }
    },
    mounted(){
    this.fetchTasks(),
    this.imageFormat()
    this.dataShared

    },
    methods:{
        async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
     let rightData = data.find(persoData => persoData.nom === this.$route.params.id)

    this.dataShared = rightData
     console.log(this.dataShared,'rightdata')
   
     },imageFormat(){
        this.image = `/${this.dataShared.image}`
        console.log(this.image)
     }

    }

 }

</script>


<style>
.date-shared{
    font-size: .6em ;
    color: rgba(0, 0, 0, 0.607);
}

.fiche-perso{
    position: relative;
}

.return{
    position: absolute;
    top: 0%;
    left: 4%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.049);
    padding: .5em 1em;
}
/* img profil */

.profil-user{
margin: 3em auto 0 auto;
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

/* task div */

.tasks-done{
    padding: 0 .5em;

}

.task-title{
    color: coral;

}

/* icine date */
.icone-agenda{
    display: flex;
    align-items: center;
    gap: 1em;
}

    .icone-agenda p{
        margin: 0;
    }
.fa-calendar-check{
    font-size: 1.8em;
    margin: 0;
    color: coral;
}

.create{
    font-size: .8em;
    font-weight: 900;

}

</style>