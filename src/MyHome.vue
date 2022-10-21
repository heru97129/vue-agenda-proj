<template>
<div>
    <MyHeader />
    <TeamManagement />
    <DocumentSign />
    <MyFooter />
</div>
   
</template>


<script>
import MyHeader from './components/MyHeader.vue'
import TeamManagement from './components/TeamManagement.vue'
import DocumentSign from './components/DocumentSign.vue'
import MyFooter from './components/MyFooter.vue'

export default{
    name:'MyHome',
    components:{
    MyHeader,
    TeamManagement,
    DocumentSign,
    MyFooter
}
}
</script>