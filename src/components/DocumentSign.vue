<template>
    <div class="docu-sign">
        <div class="title-docu">
            <h3>Document to sign</h3>
            <p>See all</p>
        </div>
        <div class="docu-cont">
            <div class="docu">
                <div class="text-doc">
                    <h4>incorporation</h4>
                    <p>sent by Jean Gernet</p>
                </div>
             <div class="last-time">
                <p>Today</p>
                
             </div>
            </div>
            <div class="docu">
                   <div class="text-doc">
                    <h4>incorporation</h4>
                    <p>sent by Jean Gernet</p>
                </div>
             <div class="last-time">
                <p>Today</p>
                
             </div>
            </div>
            <div class="docu">
                   <div class="text-doc">
                    <h4>incorporation</h4>
                    <p>sent by Jean Gernet</p>
                </div>
             <div class="last-time">
                <p>Today</p>
                
             </div>
            </div>
        </div>
    </div>
</template>


<script>
export  default{

    name:'DocumentSign'

}

</script>

<style scoped>
.docu-sign{
    width: 98%;
    margin-top: 1em;
}
.title-docu{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title-docu h4{
    font-weight:bold ;
}
.title-docu p{
    color: rgb(31, 218, 196);
    font-size: .8em;
    font-weight:600;
}
.docu{
width: 92%;
background-color: rgba(207, 207, 207, 0.139);
border-radius: 5%;
margin-bottom: 1em;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1em;
}

.docu p{
    font-size: .7em;

}

</style>