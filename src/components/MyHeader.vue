<template>
    <div class="header">
         <div class="img-head">
        <img :src="this.image" @mouseover="Hoover"  alt="">
        <div  v-if="showLogout" @click="Logout" class="logout">
            <p>Logout</p>
        </div>
        </div>
        <h2>Hello!<br> <span class="name">{{this.nom}}</span> </h2>
    
    </div>
</template>

<script>
export default {
    name: 'MyHeader',

    data() {
        return {
            tasks: '',
            infos: '',
            nom: '',
            image: '',
            showLogout:false



        }
    },
    mounted() {
        this.fetchTasks()
        this.fetchInfosProfil()
    },
    methods: {
        async fetchTasks() {
            const res = await fetch(`http://localhost:5000/tasks`)
            const data = await res.json()
            let task = data.filter(el => el.task == true)

            this.tasks = task
            this.tasks.map(el => {
                el.date = el.date.substr(3, 13)
            })


        },
        async fetchInfosProfil() {
            const res = await fetch(`http://localhost:5000/profils`)
            const data = await res.json()
            let task = data.filter(el => el.profil == true)



            task.map(user => this.infos = user)
            this.nom = this.infos.nom
            this.image = this.infos.gendere
            this.nom = this.nom.substring(0, 9)
            console.log(this.nom, this.image)
        },
        Hoover(){
            this.showLogout = true
        },
        HooverLeave(){
            this.showLogout = false
        },
        Logout(){
            this.$router.push('/')
        }

    }
}
</script>

<style scoped>
.header {
    width: 90%;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
}

.header img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.name {
    color: red;
}

.header i {
    font-size: 1.5em;
    padding: .5em;
    border-radius: 50%;
    background-color: rgba(231, 226, 226, 0.297);
}

.img-head{
    position: relative;
}

.logout{
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.245);
    padding: 0.2em 0.5em;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.logout p{
    margin: 0;
    font-size: .8em;
}
</style>