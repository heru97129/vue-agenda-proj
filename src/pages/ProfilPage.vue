<template>
   
   <div class="profil_cont">
    <div class="image-occ">
        <img src="https://i.thecartoonist.me/jerry-cartoon.png" alt="">
        <div class="cont-name-occ">
            <p>Gregory Beaujour</p>
        <p>Front-End Dev</p>
        </div>
     
    </div>
    <div class="sharedDoc">
        <h3 class="title-doc">Shared Document</h3>
      
        <ProfilShared :Alltasks="tasks" />
       

        <MyFooter />

    </div>


   </div>
   
</template>

<script>
import MyFooter from '@/components/MyFooter.vue';
import ProfilShared from '@/components/ProfilShared.vue';

export default{
    components: { MyFooter,ProfilShared },
   data(){ 
  return {
   tasks : '',
   func:this.fetchTasks()


  }},
  created(){
    this.fetchTasks()

  
  },
    methods:{
        async fetchTasks(){
     const res = await fetch(`http://localhost:5000/tasks`)
     const data = await res.json()
     let task =  data.filter(el =>  el.task == true)

     this.tasks = task
   this.tasks.map(el =>{
   el.date =  el.date.substr(3, 13)
   })


  },

    }
}
</script>

<style scoped>

.profil_cont{
    position: relative;
    position: absolute;
    top: 0;
    left: 0;
    width: 100VW;
    background-color: #08AEEA;
background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    height: 100vh;
}

/* image n occ */

.image-occ{
    width: 60%;
    height: auto;
    margin: 4em auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    
}

.image-occ img{
    margin-bottom: 1.5em;
}
.image-occ p{
    margin: 0;
    font-style: oblique;
    color: black;
    z-index: 45;
}

.image-occ p:nth-child(1){
    font-weight: 800;
    font-size: .8em;
    margin-bottom: .5em;
}

.image-occ p:nth-child(2){
    font-weight: 400;
    font-size: .6em !important;
}

.image-occ img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.cont-name-occ{
    position: relative;
    text-align:center;
    z-index: 1;
  
}



.cont-name-occ::after{
content: '';
position: absolute;
width: 140px;
left: 0;
height: 35px;
border-radius: 20px;
bottom: 0;
background-color: white;
z-index: -1;
transform: rotate(-6deg) translateY(15px) translateX(0px);
}

.cont-name-occ::before{
 content: '';
 left: -.6em;

 position: absolute;
  width: 200px;
  top: .8em;
  border-radius: 20px;
  transform: translateY(-25px) translateX(-25px)  rotate(-6deg);
 height: 35px;
 background-color: rgb(255, 255, 255);
 z-index: -1;


}

.cont-name-occ p:nth-child(2){
    font-size: .8em;
}
.sharedDoc{
    position: absolute;
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;
    top: 40%;
    left: 0;
    max-height: auto;
    min-height: 50%;
background-color: rgb(255, 255, 255);
    width: 100%;
   padding-bottom: 5em;

}

.title-doc{
    padding-left: 1em;
    margin-top: 2em;

}

.sharedDoc .Footer{
    position: absolute;
    bottom:0%;
    left: 50%;
    transform: translate(-50%,50%);
    margin-bottom: 3em;
}

</style>