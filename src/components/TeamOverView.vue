<template>
    <h4>Team overview</h4>
    <div class="icone-view">
        <i class="fa-solid fa-grip"></i>
        <i class="fa-regular fa-calendar-days"></i>
        <i class="fa-regular fa-file-code"></i>
        <i class="fa-solid fa-chart-pie"></i>
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

.icone-view i:nth-child(1){
    background-color: black;
    color: white;
}


</style>