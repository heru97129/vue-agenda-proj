<template>
    <div class="header">
    
        <img :src="this.image" alt="">
    
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
            image: ''



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
</style>