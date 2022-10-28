<template>
    <div class="introDoc">
         <div class="title-btnShow">
            <h2>
            Add  a new task

        </h2>
         <button type="button" :class="textAdd ? 'close':'open'" @click="ToggleText">{{!textAdd ? 'Add Task' :'Close'}}</button>
         </div>
        <p class="p-doc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis perferendis labore.</p>
 
      </div> 
    <form  class="add-form" v-if="textAdd">
        <div class="button-occupation">
            <button type="button" class="btn-shared">
                <i class="fa-solid fa-palette"></i>
                <p>Designs</p>
            </button>
            <button type="button" class="btn-shared">
                <i class="fa-regular fa-file-code"></i>
                <p>Developper</p>
            </button>
        </div> 
      <div class="form-control">
        <label for="">Name : </label>
        <input class="input-text" v-model="nom"  type="text" name="nom" placeholder="Add Task"> 
      </div>
          <div class="form-control">
        <label for="">Date : </label>
        <input class="input-text" v-model="date"  type="text" name="date" placeholder="Add Task"> 
      </div>
      <div class="form-control">
        <label for="">Task : </label>
       <textarea class="text-area" v-model="text" name="text"  cols="30" rows="10"></textarea>
       <button class="btn-send" @click="onSubmit">envoyer</button>

    </div>
    </form>
</template>


<script>
export default{
    data(){
     return{
        nom:'',
        date:'',
        text:'',
        textAdd:false,
        func:this.dataRender()
     }
    },
    props:{
     dataTask:Array
    },
    methods:{
        ToggleText(){
           this.textAdd = !this.textAdd
        },
        onSubmit(e){
            e.preventDefault()
            const newTask = {
              id : Math.floor(Math.random()  * 100000),
              text:this.text,
              date:this.day,
              nom:this.nom,
              task: true
         
          }
        this.$emit('add-task',newTask)

        },
        dataRender(){
        console.log(this.dataTask)
        }
    }
}

</script>



<style scoped>
.introDoc{
    margin-bottom: 2em;
}

.title-btnShow{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title-btnShow button{
    padding: .7em 1em;
}

.title-btnShow .close{
background-color: red;
border: none;
}
.title-btnShow .open{
background-color: rgb(0, 255, 106);
border: none;

}
.button-occupation{
    display: flex;
    justify-content: space-between;
    gap: 2EM;
    margin-bottom: 1em;
}
.btn-shared{
    padding: .5EM;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    gap: .5em;
    border: 1px solid rgba(0, 0, 0, 0.173);
    background-color: transparent;
    
}
.btn-shared i{
    font-size: 2.2em;
    color: rgba(0, 0, 0, 0.705);
}

.btn-shared p{
    font-size: 1.5em;
}

.p-doc{
font-size: .8em;
margin: 1em 0;
color: rgba(0, 0, 0, 0.531);
}

/* input */

.form-control label{
display: flex;
flex-direction: row;
justify-content: space-between;
}
.form-control{
    margin-bottom: 1em;
    padding: 0 .5em;
}
.form-control input{
    width: 100%;
    padding: .5em 0em;
    margin-top: .5em;
}

.form-control input:focus,.form-control textarea:focus{
   outline-color: rgba(0, 191, 255, 0.475);
}
.text-area{
    width:100%;
}


.btn-send{
    width: 100%;
    padding: .7em 0;
    border: none;
    background-color: black;
    color: white;
}
</style>