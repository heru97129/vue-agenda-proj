<template>
    <div class="container-group">
    <MyHeader />
    <TeamOverView />
    <div class="group-cont">
        <h2 class="title">Build a new group</h2>
    <form  class="add-form">
   
      <div class="form-control">
        <label for="">Add Group :        </label>

        <input class="input-text" v-model="name"  type="text" name="group" placeholder="Add Group"> 
      </div>
      <div class="form-control">
        <label for="">Add people:       </label>
       <select @change="AddPeople"  name="" v-model="select" id="" >
        <option value="">--Please choose an name--</option>
         <option v-for="(user,index) in users" :key="index" :value="user.nom"  @click="AddPeople">{{user.nom}}</option>
       </select>
      </div>
    <button @click="addTask" class="send">Envoyer</button>
    </form>
    <div class="groupes" v-if="showGroup">
         <h2 class="group-title">Your Group</h2>
         <h3 class="group-owner">Group Owner : <span>{{groupData.userIdCurrent.nom}}</span> </h3>

          <h3 class="group-name">Group Name : <span>{{groupData.name}}</span> </h3>
          <ul v-for="(teamate,index) in groupData.team" :key="index">
            <li>{{teamate}}</li>
          </ul>
    </div>
    <h2 v-else>No group has been created yet</h2>
  </div>

</div>
</template>


<script>

import MyHeader from '@/components/MyHeader.vue';
import TeamOverView from '@/components/TeamOverView.vue';

export default{
    components: { MyHeader, TeamOverView},
    data(){
        return{
            users:'',
            name:'',
            groups:[],
            tabPeople:[],
            teamate:[],
            groupData : {},
            userIdCurrent:0,
            showGroup:false

        }
    },
    mounted(){
      this.fetchProfil()
    },
    methods:{
        async fetchProfil(){
     const res = await fetch(`http://localhost:5000/profils`)
     const data = await res.json()
     let user =  data.filter(el =>  el.profil == false)
     let userId = data.find(el => el.id && el.profil == true)
     console.log(userId.id)
     this.userIdCurrent = userId

     console.log(user)
     this.users = user
     this.fetchGroup(this.userIdCurrent.id)
   
     },
     async addTask(e){
        e.preventDefault()
        console.log(this.users,this.tabPeople,'people')
        const group = {
          name : this.name,
          team : this.tabPeople,
          userIdCurrent : this.userIdCurrent
        }
      const res = await fetch('http://localhost:5000/Group',{
        method:'POST',
        headers :{
          'content-type' :'application/json',
        },
        body: JSON.stringify(group)

      })
     let data = res.json()
   
       this.groups = [...this.groups,data]
     },
     AddPeople(e){
        console.log('hey')
       this.tabPeople.push(e.target.value)
       console.log(this.tabPeople)

    //    const fetch = this.fetchProfil()

    },

    async fetchGroup(id){
        const res = await fetch(`http://localhost:5000/Group`)
     const data = await res.json()
     
    data.map(el=>{
        console.log(el.userIdCurrent.id,id)
        if(el.userIdCurrent.id === id){
            console.log('yo')
            this.groupData = el
            this.showGroup = true

        }else{
            this.showGroup = false
        }
    })
    console.log(data)
    return this.groupData
    } 
 
    },

   
}
</script>


<style scoped>
.container-group{
    overflow: hidden;
}

.group-cont{
margin-top: 2em;
}

.title{
    text-align: center;
}

.form-control{
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    gap: .5em;
}

input{
    padding: .5em .5em;
}

.send{
    width: 100%;
    padding: .5em 0em;
    background-color: black;
    border-radius: 5PX;
    color: WHITE;
    font-weight: 600;
}

select{
    padding: .5em 0;
    outline: none;
}

.group-title{
    text-align: center;
}

.group-name span{
color: red;
}
</style>