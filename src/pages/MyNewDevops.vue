<template>
    <div class="container-dev">
      <h1>Ajouter un nouveau Dev</h1>

       <form @submit="onSubmit">
      <label for="">
        <p>Nom du devloppeur</p>
         <input type="text"  v-model="nom" name="nom">
      </label>
      <label for="">
        <p>Profession</p>
         <input type="text" v-model="profession" name="profession">
      </label>
      <button type="submit">Envoyer</button>
        </form>

    </div>
</template>
<script>
export default{
    name:'MyDevops',
    methods:{
       async onSubmit(e){
          e.preventDefault()
  
          const newTask = {
              id : Math.floor(Math.random()  * 100000),
              nom: this.nom,
              profession: this.profession,
              myDev : true
            
          }

        //   this.$emit('add-consult',newTask)
          const res = await fetch('http://localhost:5000/tasks',{
           method:'POST',
              headers :{
          'content-type' :'application/json',
        },
        body: JSON.stringify(newTask)
        })

        const data = await res.json()
        console.log(data)
        return data
    }
 }
}
</script>


<style scoped>
.container-dev{
    width: 98%;
    margin: 0 auto;
    height: 90vh;
    
}
h1{
    text-align: center;
}

form{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 1em;
}

label{
    width: 98%;
    margin-bottom: .5em;
}
input{
    width: 100%;
    padding: .5em .5em;
    border-radius: 20px;
    border: none;
    background-color: rgba(35, 149, 162, 0.099);

}

button{
    margin-top: 2em;
    padding: .8em 0;
    border-radius: 20px;
    border: none;
    background-color: black;
    color: white;
}

</style>