<template>
  <div class="container-team">
    <MyHeader />
    
    <TeamOverView />
    
    <MyDepartment :datadesign="datadesign" :datadeve="datadeve" />
    
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import TeamOverView from '../components/TeamOverView.vue'
import MyFooter from '../components/MyFooter.vue'
import MyDepartment from '../components/MyDepartment.vue';

export default {
    name: 'MyTeam',
    components: {
        MyHeader,
        MyFooter,
        TeamOverView,
        MyDepartment
    },
    data() {
        return {
            datadeve: [],
            datadesign: [],


        }

    },
    mounted() {
        this.fetchTasks()
    },
    methods: {
        async fetchTasks() {
            const res = await fetch(`http://localhost:5000/tasks`)
            const data = await res.json()


            let fetcho = this.fetchGroup()

            fetcho.then(dataGroup => {
                dataGroup.map(teamate => {
                    teamate.team.forEach(name => {
                        data.map(dataTask => {
                            if (dataTask.nom === name && teamate.userIdCurrent.profil) {
                                   console.log(teamate.userIdCurrent)
                                if (dataTask.occ === 'design') {
                                    this.datadesign.push(dataTask)

                                }
                                if (dataTask.occ === 'developper') {
                                    this.datadeve.push(dataTask)

                                }
                            }

                        })
                    })
                })
            })

            console.log(this.datadesign, 'design')

        },

        async fetchGroup() {
            const res = await fetch(`http://localhost:5000/Group`)
            const data = await res.json()

            console.log(data, 'groupe')
            return data

        },

    }

}
</script>

<style scoped>

.container-team{
  overflow:hidden
}

</style>