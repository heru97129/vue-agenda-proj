import { createRouter,createWebHistory } from "vue-router";
import MyHome from '../MyHome.vue'
import MyTeam from '../pages/MyTeam.vue'
import MyShared from '../pages/MyShared.vue'
import MyNewConsultant from  '../pages/MyNewConsultant.vue'
import MyNewDevops from '../pages/MyNewDevops'
import MyNewEmployee from '../pages/MyNewEmployee.vue'
import PostView from '../pages/PostView.vue' 
import ProfilPage from "@/pages/ProfilPage.vue";
import GetStarted from "@/pages/GetStarted.vue";
import LoginPage from "@/pages/LoginPage.vue";


const routes = [{
    path: '/',
    name: 'GetStarted',
    component: GetStarted 
},{
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
},
{
    path: '/home',
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
},{
    path: '/post/:id',
    name: 'PostView',
    component: PostView,
 },{
    path: '/profil',
    name: 'ProfilPage',
    component: ProfilPage,  
 }

]
 const router = createRouter({
    history:createWebHistory(),
    routes
})


export default  router