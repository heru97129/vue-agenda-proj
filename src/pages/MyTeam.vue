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

            //  let design=  data.filter(el =>  el.occ == 'design')
            //  let dev =  data.filter(el =>  el.occ == 'developper')

            //  this.datadesign = design
            //  this.datadeve = dev  
            //  let cont = design.concat(dev)

            //  console.log(design,'my team',dev,cont)
            let fetcho = this.fetchGroup()

            fetcho.then(el => {
                el.map(el => {
                    el.team.forEach(name => {
                        data.map(el => {
                            console.log(el.nom, 'data', name)
                            if (el.nom === name) {

                                if (el.occ === 'design') {
                                    this.datadesign.push(el)

                                }
                                if (el.occ === 'developper') {
                                    this.datadeve.push(el)

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