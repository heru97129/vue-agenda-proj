<template>
    <div class="team-management" ref="surContainer" @mouseup="stop" @mousedown="Slide" @mouseout="stop" @mousemove="moveTeam" >
        <h3>Team management</h3>

        <div ref="container" class="container-occup">
            <div class="occup">
                <h4>Consultant</h4>
                <div class="nbrNadd">
                    <p>{{ nbrConsult }}</p>
                    <router-link to="/consultant">
                        <i class="fa-solid fa-plus"></i>
                    </router-link>
                </div>
            </div>
            <div class="occup">
                <h4>Dev Ops</h4>
                <div class="nbrNadd">
                    <p>{{ nbrDev }}</p>
                    <router-link to="/devops">

                        <i class="fa-solid fa-plus"></i>
                    </router-link>
                </div>
            </div>
            <div class="occup">
                <h4>Employee</h4>
                <div class="nbrNadd">
                    <p>{{ nbrEmploye }}</p>
                    <router-link to="/NewEmployees">
                        <i class="fa-solid fa-plus"></i>
                    </router-link>
                </div>
            </div>
            <div class="occup">
                <h4>Designer</h4>
                <div class="nbrNadd">
                    <p>{{ nbrEmploye }}</p>
                    <router-link to="/NewEmployees">
                        <i class="fa-solid fa-plus"></i>
                    </router-link>
                </div>
            </div>

        </div>

    </div>
</template>


<script>

export default {
    name: 'TeamManagement',

    data() {
        return {
            pressed: false,
            startX: null,
            x: null

        }

    },
    props: {
        nbrConsult: String,
        nbrDev: String,
        nbrEmploye: String
    },
    methods: {

        Slide(e) {
            this.pressed = true
            console.log('run')
            if (e) {
                this.startX = e.offsetX - this.$refs.container.offsetLeft
 

            }


        },

        moveTeam(e) {

            if (!this.pressed) {
                return
            } else {
                this.$refs.container.style.left = `${e.offsetX - this.startX}px`
                console.log(typeof this.$refs.container.style.left, this.pressed)
                this.bounding()
            }




        },

        stop() {
            console.log('stop')

            this.pressed = false
        },

        bounding(){
            const container_rect = this.$refs.surContainer.getBoundingClientRect()
            const card_rect = this.$refs.container.getBoundingClientRect()
            console.log(container_rect,card_rect.left)
            if(  this.$refs.container.style.left > '0px'){
                this.$refs.container.style.left = '0px'
            }else if(card_rect.right < container_rect.right){
                this.$refs.container.style.left = `-${card_rect.width - container_rect.width}px`

            }

        }
    }

}

</script>


<style scoped>
.team-management {
    width: 98%;
    height: 25vh;
    overflow-x: hidden;
    position: relative;

}

.team-management h4 {
    margin-bottom: 0;
    font-size: .9em;
}

.container-occup {
    display: flex;
    gap: 1em;
    width: fit-content;
    position: absolute;
    left:0;
    pointer-events: none;
}


.occup {
    width: 200px !important;
    height: 130px;
    background-color: rgba(0, 0, 0, 0.92);
    padding: 0 1em;
    color: white;
    border-radius: 20px;
    pointer-events: none;

}


/* inside occup div */

.nbrNadd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
}

.nbrNadd p {
    font-size: 1.8em;
    font-weight: 800;
}

.fa-plus {
    padding: .5em;
    border-radius: 50%;
    background-color: rgb(98, 206, 98);
    color: black;
}
</style>