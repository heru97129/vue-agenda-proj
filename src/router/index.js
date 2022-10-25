import { createRouter,createWebHistory } from "vue-router";
import MyHome from '../MyHome.vue'
import MyTeam from '../pages/MyTeam.vue'
import MyShared from '../pages/MyShared.vue'
import MyNewConsultant from  '../pages/MyNewConsultant.vue'
import MyNewDevops from '../pages/MyNewDevops'
import MyNewEmployee from '../pages/MyNewEmployee.vue'
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
    name: 'MyNewConsultant',
    component: MyNewConsultant
},{
    path: '/devops',
    name: 'MyNewDevops',
    component:MyNewDevops
},{
    path: '/NewEmployees',
    name: 'MyNewEmployee',
    component:MyNewEmployee
}]
 const router = createRouter({
    history:createWebHistory(),
    routes
})


export default  router