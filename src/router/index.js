import { createRouter,createWebHistory } from "vue-router";
import MyHome from '../MyHome.vue'
import MyTeam from '../MyTeam.vue'
console.log(MyHome,MyTeam)

const routes = [{
    path: '/',
    name: 'MyHome',
    component: MyHome
},{
    path: '/myteam',
    name: 'MyTeam',
    component: MyTeam
}]
 const router = createRouter({
    history:createWebHistory(),
    routes
})


export default  router