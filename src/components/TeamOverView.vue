<template>
    <h4>Team overview</h4>
    <div class="icone-view">
        <router-link to="/myteam" >

            <i class="fa-solid fa-grip"></i>
        </router-link>

        <router-link to="/AddGroup">

            <i class="fa-solid fa-user-group"></i>

        </router-link>
        <i class="fa-regular fa-file-code"></i>
        <router-link to="/TheCalendar">
        <i class="fa-solid fa-chart-pie"></i>
    </router-link>
        <i class="fa-solid fa-cloud"></i>

    </div>
</template>

<script>

export default{
    name:'TeamOverView'
}

</script>


<style scoped>

.icone-view{
    display: flex;
    align-items: center;
    gap: 1em;
}

.icone-view i{
padding: .8em;
background-color: rgba(214, 214, 214, 0.348);
color: rgba(0, 0, 0, 0.729);
font-size: 1.6em;
border-radius: 20px;
}



.router-link-active i{
    background-color: black;
    color: white;
}

</style>