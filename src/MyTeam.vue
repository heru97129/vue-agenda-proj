<template>
    <MyHeader />
    <TeamOverView />
    <MyDepartment />
  <MyFooter />

</template>

<script>
import MyHeader from './components/MyHeader.vue'
import TeamOverView from './components/TeamOverView.vue'
import MyFooter from './components/MyFooter.vue'
import MyDepartment from './components/MyDepartment.vue';

export default{
    name:'MyTeam',
    components:{
    MyHeader,
    MyFooter,
    TeamOverView,
    MyDepartment
}

}
</script>