<template>
    <div class="container-login">
    
        <div class="brand">
    
        
            <h3>Scribes</h3>
    
 
        </div>
 
    
        <div class="text-accueil">
    
            <h1>Share your work<br> with your team
    
      
            </h1>
     
    
            <router-link to="/login">

    
                <button class="btn-started">Get started</button>
    

    
            </router-link>
    
            <router-link to="/login">   
    
                <p>you have an account ? <span>sign in</span> </p>

    
            </router-link>   
    
        </div>
    
    
    
    
    
    
    
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            profil: false,
            oldprofil: {},
            objCurr: {},
            nom: '',
            email: '',
            password: '',
            occupation: '',
            gendere: '',
            id: 0,
            saveId: ''
        }
    },
    mounted() {
        this.fetchProfil()
        this.fetchGroup()

    },
    methods: {
        async ProfilReset(lastLog) {

            const profils = {

                profil: this.profil
            }
            const res = await fetch(`http://localhost:5000/profils/${lastLog}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(profils)

            })


            const data = await res.json()
            console.log(data, 'get started')
            return data

        },

        async GroupeReset(lastLog, curr) {
            console.log(curr.nom, 'nom')
            this.nom = curr.nom;
            this.email = curr.email
            this.password = curr.password
            this.occupation = curr.occupation
            this.gendere = curr.gendere
            this.id = curr.id

            const profils = {

                userIdCurrent: {
                    nom: this.nom,
                    email: this.email,
                    password: this.password,
                    occupation: this.occupation,
                    gendere: this.gendere,
                    id: this.id,
                    profil: this.profil

                }
            }
            const res = await fetch(`http://localhost:5000/Group/${lastLog}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(profils)

            })


            const data = await res.json()
            console.log(data.userIdCurrent.profil, 'get started')
            // return data

        },

        async fetchProfil() {
            const res = await fetch(`http://localhost:5000/profils`)
            const data = await res.json()

            console.log(data, 'rightdata')
            data.map(user => {

                // id and status's state 
                let { id, profil } = user

                // if profil is true save the last id connected
                if (profil) {

                    console.log(id)
                    this.saveId = id
                    this.oldprofil = user
                    this.ProfilReset(this.saveId)

                } else {
                    console.log('no body was logged before')
                    return
                }
            })

        },

        async fetchGroup() {
            const res = await fetch(`http://localhost:5000/Group`)
            const data = await res.json()

            console.log(data, 'rightdata')
            data.map(user => {
                let { id } = user
                // id and status's state 
                let { profil } = user.userIdCurrent
                console.log(id, profil)
                // if profil is true save the last id connected
                if (profil) {
                    this.objCurr = user.userIdCurrent

                    console.log(id, 'true')
                    this.saveId = id
                    this.GroupeReset(this.saveId, this.objCurr)

                } else {

                    return
                }
            })

        },
    }
}
</script>


<style scoped>
.container-login {
    position: relative;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0b3854;
    background-image: linear-gradient(160deg, #0b3854 0%, #80D0C7 100%);
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    z-index: 42;
    display: flex;
    align-items: flex-end;
}

.container-login::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/public/images/fractalsBw.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    mix-blend-mode: darken;
    z-index: -1;
}

.brand {
    position: absolute;
    top: 1%;
    left: 8%;
}

.svg-container {
    width: 80%;
    height: 55%;
    margin: 3em auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.svg-container svg {
    width: 80%;
    height: 100%;
}

.text-accueil {
    width: 85%;
    margin: 0em auto 3em auto;
}

.text-accueil p {
    margin-top: 1em;
    font-size: .6em;
}

.text-accueil a {
    text-decoration: none;
    color: white;
}

.text-accueil h1 {
    font-size: 2.3em;
    margin: 0 0 .5em 0;
}

.text-accueil span {
    color: rgb(42, 84, 255);
}

.btn-started {
    padding: 1em 2em;
    border-radius: 10px;
    border: none;
    font-weight: 600;
}
</style>