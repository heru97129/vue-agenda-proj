import { createRouter,createWebHistory } from "vue-router";
import MyHome from '../MyHome.vue'
import MyTeam from '../MyTeam.vue'
import MyShared from '../MyShared.vue'
import MyConsultant from  '../MyConsultant.vue'
console.log(MyHome,MyTeam)

const routes = [{
    path: '/',
    name: 'MyHome',
    component: MyHome
},{
    path: '/myteam',
    name: 'MyTeam',
    component: MyTeam
},{
    path: '/myshared',
    name: 'MyShared',
    component: MyShared
},{
    path: '/consultant',
    name: 'MyConsultant',
    component: MyConsultant
}]
 const router = createRouter({
    history:createWebHistory(),
    routes
})


export default  router