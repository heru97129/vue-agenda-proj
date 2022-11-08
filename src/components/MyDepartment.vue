<template>
    <div class="Design">
      <h4>Design department</h4>
      <div class="fiche-perso" >
        <div class="perso-d"  v-for="(dataR,index) in datadesign"  :key="index">
          <router-link :to="/post/+ dataR.nom">

          <img :src="dataR.image" alt="">
        </router-link>

          <div class="nameNfunc">
            <p>{{dataR.nom}}</p>
            <p class="func">{{dataR.title}}</p>
          </div>

        </div>

      </div>

    </div>


    <div class="Dev">
      <h4>Development department</h4>
      <div class="fiche-perso">
        <div class="fiche-perso" >
        <div class="perso-d"  v-for="(dataD,index) in datadeve"  :key="index">
          <router-link :to="/post/+ dataD.nom">

          <img :src="dataD.image" alt="">
        </router-link>

          <div class="nameNfunc">
            <p>{{dataD.nom}}</p>
            <p class="func">{{dataD.title}}</p>
          </div>
        
        </div>

      </div>
      </div>
    </div>
</template>

<script>

export default{
    name:'MyDepartment',
    props:{
      datadesign:Array,
      datadeve:Array
    },
 
    data(){
 
     return {
      designData : this.datadesign,
       devData : this.datadeve,
      func:this.datarender()
     }
    },
    methods:{
      datarender(){
        console.log(this.datadeve,this.datadesign)
        // this.datadeve.map(el =>{
        //   console.log(el)
        // })
      }
    }
}
</script>


<style scoped>
.perso-d,.perso-dev{
  border: 1px solid rgba(0, 0, 0, 0.203);
  border-radius: 20px;
  padding: .5em;
    display: flex;
    align-items: center;
    margin: 1em 0;
}
.perso-d p,.perso-dev p{
  margin: 0;
  font-weight: 800;
}

.func{
  color: rgba(0, 0, 0, 0.463);
  font-size: .8em;
}

img{
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-right: 1em;
}

</style>