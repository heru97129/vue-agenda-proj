<template>
    <div class="create-acccount">
    
        <div class="brand">
    
            <h3>Scribes</h3>
    
        </div>
    
        <div class="return">
    
            <router-link to="/">
    
                <i class="fa-solid fa-chevron-left"></i>
    
            </router-link>
    
        </div>
    
        <div class="container">
    
            <h2 v-if="show">Create an account</h2>
    
            <h2 v-else class="welcome">Welcome back </h2>
    
            <p>let's get started with your 30 day free trial</p>
    
    
    
            <form action="" class="form">
    
                <label for="">
    
            <input type="text" v-model='nom' name="nom" placeholder="Nom" v-if="show">
    
    
    
          </label>
    
                <label for="">
    
            <input type="text" v-model="email" name="email" placeholder="Email">    
    
          </label>
    
                <label for="">
    
            <input type="occupation" v-if="show" v-model="occupation" name="occupation" placeholder="occupation">
    
            
    
          </label>
    
                <label v-if="show" for="">
    
            <select name="" id=""  @change="gender">
    
              <option value="">choose your gender </option>
    
              <option value="Male">Male</option>
    
              <option  value="Femele">Femele</option>
    
            </select>
    
            
    
          </label>
    
                <label for="">
    
            <input type="password" v-model="password" name="password" placeholder="Password">
    
            
    
          </label>
    
                <p v-if="message === 'connexion' " class="success">Connexion in wainting...</p>
    
                <p v-else-if="message === 'error'" class="failed">Failed to connect</p>
    
    
    
                <div class="button-form">
    
                    <button @click="create">Create account</button>
    
                    <button @click="logSelf">{{show ? 'Already have an account': 'connexion'}}</button>
    
                </div>
    
            </form>
    
        </div>
    
    </div>
</template>


<script>
export default {


    name: 'LoginPage',
    data: () => {

        return {
            show: false,
            nom: "",
            email: "",
            password: "",
            tabPic: [],
            logs: [],
            message: "",
            occupation: '',
            gendere: '',
            profil: [],
            saveName: '',
            saveId: '',
            catchErr: false,
            creator : true,
            profilgroup:'',
            allEmail: []
       

        }
    },
    mounted() {
        this.show = true
        this.fetchTasks()
        this.EmailCheck()

    },
    methods: {

        gender(e) {
            console.log(e.target.value)

            if (e.target.value === 'Femele') {
                this.tabPic = ['/images/femel1.jpg', '/images/femele3.png', '/imagesfemele4.png']
            } else {
                this.tabPic = ['/images/male1.jfif', '/images/male2.jfif', '/images/male3.webp']

            }

            this.tabPic = this.tabPic[Math.floor(Math.random() * this.tabPic.length)]
            console.log(this.tabPic)
        },
        async create(e) {
            e.preventDefault()
              

        

            const log = {
                nom: this.nom,
                email: this.email,
                password: this.password,
                occupation: this.occupation,
                gendere: this.tabPic,
                profil: false
            }

            if(!log.email.match(/@/gm)){
                alert('format mail only ')
                this.nom = ""
                this.email = ""
                this.password = ""
                this.occupation = ""
                return 
            }
                

            this.allEmail.forEach(el =>{
               if(log.email === el){
                console.log('oihiohoi')
                this.creator = false
                location.assign('/login')
                return 

               }else{
                console.log('yooooooooooo')
                return
               }
            })
                
              console.log(this.creator)
            if (log.nom != "" || log.email != "" || log.password != "") {
                console.log(this.creator,'in')
                       if(this.creator){

                           const res = await fetch('http://localhost:5000/profils', {
                               method: 'POST',
                               headers: {
                                   'content-type': 'application/json',
                               },
                               body: JSON.stringify(log)
           
                           })
           
                           const data = await res.json()
                           this.logs = [...this.logs, data]
                           console.log(data)
                           this.nom = ""
                           this.email = ""
                           this.password = ""
                           this.occupation = ""

                       }


            } else {
                this.show = true

            }

        },

        //   login
        async logSelf(e) {
            e.preventDefault()
            this.show = false
            // data logo
            const log = {
                nom: this.nom,
                email: this.email,
                password: this.password,
                profil: this.profil
            }

            //  si les change son vide lanc?? la function fetch 
            if (log.email != "" || log.password != "") {
                let fetch = this.fetchTasks()

                fetch.then(db => {
                    db.map((data, i) => {

                        let { email, password, id, nom } = data

                        if (log.email === email && log.password === password) {
                            console.log(email, log.password, 'nom ok ', id)
                            this.catchErr = true
                            this.saveName = nom
                            this.saveId = id
                            this.message = 'connexion'

                            this.changProfil()
                            this.fetchGroup()

                            return

                        }

                        if (i == db.length - 1 && !this.catchErr) {
                            console.log('yo')
                            this.message = 'error'
                        }

                    })
                }).catch(err => {
                    console.log(err)
                    this.message = 'error'
                })

            }

        },

        EmailCheck(){
           let fetchProfil = this.fetchTasks()
            fetchProfil.then((el)=>{
                el.map((profil)=>{
                    console.log(profil.email)  
                    this.allEmail.push(profil.email)
                })
                 })
        },
        //   fetch
        async fetchTasks() {
            const res = await fetch(`http://localhost:5000/profils`)
            const data = await res.json()

            console.log(data, 'rightdata')
            return data

        },

        async changProfil() {
            if (this.message === 'connexion') {
                console.log('yeu')

                this.profil = true
                const profils = {

                    profil: this.profil
                }
                const resu = await fetch(`http://localhost:5000/profils/${this.saveId}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(profils)

                })

                const data = await resu.json()
                //  profils = [...profils,data]

                console.log(data)
                setTimeout(() => {
                    this.$router.push('/home')
                }, 2000)
            }
        },

        async fetchGroup(){
          const res = await fetch(`http://localhost:5000/Group`)
            const data = await res.json()
            
            
            data.map(groupes => {
              let {id} = groupes
//  si l'adresse mail de l'user correspond  a une adresse mail dans la db group
              if(groupes.userIdCurrent.email ===  this.email){
                let user = groupes.userIdCurrent

                      console.log('match')
                      // lancer la function pour update la valeur du profil a false 
                   this.changeGroup(id,user)
                }
            })
            return data

        },

        // remttre la valuer de profil a true 
        async changeGroup(id,curr){
         

           
          console.log(id,curr)

          // remettre toutes les valeurs a leurs data d'origin et update la valuer de profil a true 
          // pour afficher le groupe 
            let profils = {
              userIdCurrent :{
                nom:curr.nom,
                email:curr.email,
                password:curr.password,
                occupation:curr.occupation,
                gendere:curr.gendere,
                id:curr.id,
                profil : true
              }
            }

          const resu = await fetch(`http://localhost:5000/Group/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(profils)

                })

                const data = await resu.json()
                return data

        }
    }
}
</script>

<style scoped>
.failed {
    color: red
}

.success {
    color: green
}

.create-acccount {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.brand {
    position: absolute;
    top: 1%;
    left: 8%;
}

.return {
    position: absolute;
    top: 2.5%;
    left: 80%;
    width: 10px;
}

.create-acccount h2,
.create-acccount p {
    margin: 0;
}

.create-acccount p {
    font-size: .7em;
}

/* loggin */

.welcome {
    text-align: center;
}

.form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.5em;
}

.form label input,
select {
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    margin-bottom: 1EM;
    padding: .5EM .5EM;
    border-bottom: 1px solid rgba(0, 0, 0, 0.624);
    outline: none;
}

.button-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1EM;
}

.button-form button {
    padding: .8em 0;
    border-radius: 20px;
    border: none;
    background-color: black;
    color: white;
    margin-bottom: .5em;
    font-weight: 600;
}

.button-form button:nth-child(2) {
    border: 1PX SOLID black;
    background-color: white;
    color: rgb(15, 15, 15);
}
</style>