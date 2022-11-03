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
            <button @click="clickOcc" ref="design" name="design" type="button" class="btn-shared">
                <i class="fa-solid fa-palette"></i>
                <p>Designs</p>
            </button>
            <button @click="clickOcc" name="developper" ref="dev" type="button" class="btn-shared">
                <i class="fa-regular fa-file-code"></i>
                <p>Developper</p>
            </button>
        </div> 
      <div class="form-control">
        <label for="">Name : </label>
        <input class="input-text" v-model="nom"  type="text" name="nom" placeholder="Add name"> 
      </div>
      <div class="form-control">
        <label for="">status : </label>
        <input class="input-text" v-model="status"  type="text" name="status" placeholder="Add status"> 
      </div>
      
          <div class="form-control">
        <label for="">titre : </label>
        <input class="input-text" v-model="title"  type="text" name="title" placeholder="Add title"> 
      </div>
      <div class="form-control">
        <label for="">Task : </label>
       <textarea class="text-area" v-model="text" name="text"  cols="30" rows="10"></textarea>
       <button class="btn-send" @click="onSubmit">envoyer</button>

    </div>
    </form>
    <div v-for="(task,index) in dataTask" :key="index">
        <div class="taskDocument">
            <div class="task-left">
                <h4> {{task.nom}}</h4>
            <p>{{task.date}}</p>
            </div>
            <div class="task-right">
                <p>{{task.occ}}</p>
            </div>
          
        </div>

    
    </div>
</template>


<script>
export default{
    data(){
     return{
        nom:'',
        date:'',
        text:'',
        title:'',
        status:'',
        occupation:'',
        textAdd:false,
        
     }
    },
    props:{
        dataTask:Object
    },

    created(){
   console.log(this.dataTask)
   this.dataTask
    },
    methods:{
        ToggleText(){
           this.textAdd = !this.textAdd
        },
        clickOcc(e){
           if(e.target.name === 'developper'){
              this.occupation = e.target.name
              e.target.style = 'border:1px solid rgba(0, 191, 255, 0.475);'
              this.$refs.design.style = '    border: 1px solid rgba(0, 0, 0, 0.173);'
            }else{
                this.occupation = e.target.name

            e.target.style = 'border:1px solid rgba(0, 191, 255, 0.475);'
            this.$refs.dev.style = '    border: 1px solid rgba(0, 0, 0, 0.173);'

           }
                   
        },
        onSubmit(e){
            e.preventDefault()
            console.log(this.dataTask)
            let str = new Date().toString()

            if(this.status === '' || this.nom == '' || this.title == ''
             || this.text === '' 
            ){
               alert('failed to fullfilled')
               return
            }
           const text = {
         
                    id : Math.floor(Math.random()  * 100000),
              text:this.text,
              date:str.substring(0,25),
              nom:this.nom,
              status:this.status,
              title:this.title,
              occ:this.occupation,
              task: true
            
           
           }
           this.newtask.tasks = []
           
         this.newtask.tasks.push({...text})
          this.nom ='',
        this.date ='',
        this.text ='',
        this.title ='',
        this.status ='',
        this.occupation ='',
        this.$emit('add-task',newTask)
        // location.reload()

        return this.dataTask

        },
      
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

.taskDocument h3,.taskDocument p{
    margin: 0;
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
    pointer-events: none;
}

.btn-shared p{
    font-size: 1.5em;
    pointer-events: none;

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

/* task */

.taskDocument{
    position: relative;
    margin-bottom: 1.5EM;
    display: flex;
    justify-content: space-between;
}

.taskDocument::after{
    content: '';
    position: absolute;
    bottom: -10PX;
    width: 100%;
    height: 1PX;
    background-color: rgba(0, 0, 0, 0.205);
}
.taskDocument h4{
    text-transform: capitalize !important;
}
.taskDocument p{
    font-size: .8em;
    margin-top: .5em;

}

.task-right{
    display: flex;
    align-items: center;
}
</style>