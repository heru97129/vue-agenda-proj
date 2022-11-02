<template>

 <div class="create-acccount">
    <div class="container">
    <h2>Create an account</h2>
    <p>let's get started with your 30 day free trial</p>

    <form action="" class="form">
      <label for="">
        <input type="text" name="nom" placeholder="Nom">

      </label>
      <label for="">
        <input type="text" name="email" placeholder="Email">
        
      </label>
      <label for="">
        <input type="text" name="password" placeholder="Password">
        
      </label>
        <div class="button-form">
            <button>Create account</button>
            <button>Already have account</button>
        </div>
    </form>
</div>
 </div>

</template>

<style scoped>

.create-acccount{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.create-acccount h2,.create-acccount p{
    margin: 0;
}

.create-acccount p{
    font-size: .7em;
}
.form{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.5em;
    
}
.form label input{
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    margin-bottom: 1EM;
    padding: .5EM .5EM;
    border-bottom: 1px solid rgba(0, 0, 0, 0.624);
}
.button-form{
    display:flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1EM;
}

.button-form button{
    padding: .8em 0;
    border-radius: 20px;
    border: none;
    background-color: black;
    color: white;
    margin-bottom: .5em;
    font-weight: 600;
}

.button-form button:nth-child(2){
 
    border: 1PX SOLID black;
    background-color: white;
    color: rgb(15, 15, 15);
   
}

</style>