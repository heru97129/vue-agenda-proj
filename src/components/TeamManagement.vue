<template>
    <div class="team-management">
        <h3>Team management</h3>
        
        <div ref="container" class="container-occup" draggable="true" @dragenter="startdrag" >
          <div class="occup">
            <h4>Consultant</h4>
             <div class="nbrNadd">
                <p >{{nbrConsult}}</p>
                <router-link to="/consultant">
                <i class="fa-solid fa-plus"></i>
            </router-link>
             </div>
          </div>
          <div class="occup">
             <h4>Dev Ops</h4>
             <div class="nbrNadd">
                <p>12</p>
                <i class="fa-solid fa-plus"></i>
             </div>
          </div>
          <div class="occup">
             <h4>Employee</h4>
             <div class="nbrNadd">
                <p>50</p>
                <i class="fa-solid fa-plus"></i>
             </div>
          </div>
          <div class="occup">
             <h4>Consultant</h4>
             <div class="nbrNadd">
                <p>5</p>
                <i class="fa-solid fa-plus"></i>
             </div>
          </div>
        </div>

    </div>
</template>


<script>
export default{
    name:'TeamManagement',
    mounted(){
        console.log(this.$refs.container)
        return this.$refs.container
    },
    props: {
        nbrConsult: String,
    },
    methods:{
        startdrag(){
       
         this.$refs.container.addEventListener('dragstart',(event)=>{
            console.log(event)
         })
        },
         addConsult(task){
          console.log(task)
         }
        
    }
  
}

</script>


<style scoped>
.team-management{
width: 98%;
overflow-x: hidden;
}

.team-management h4{
    margin-bottom: 0;
    font-size: .9em;
}

.container-occup{
    display: flex;
    gap: 1em;
    width: fit-content;

}


.occup{
    width: 200px !important;
    height: 130px;
    background-color: rgba(0, 0, 0, 0.92);
    padding: 0 1em;
    color: white;
    border-radius:20px;

}


/* inside occup div */

.nbrNadd{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
}

.nbrNadd p{
    font-size: 1.8em;
    font-weight: 800;
}

.fa-plus{
    padding: .5em;
    border-radius: 50%;
    background-color: rgb(98, 206, 98);
    color: black;
}
</style>