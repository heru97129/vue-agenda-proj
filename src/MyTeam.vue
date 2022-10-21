<template>
    <MyHeader />
  <MyFooter />

</template>

<script>
import MyHeader from './components/MyHeader.vue'

import MyFooter from './components/MyFooter.vue'
export default{
    name:'MyTeam',
    components:{
    MyHeader,
  
    MyFooter
}

}
</script>