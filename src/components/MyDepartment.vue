<template>
    <div class="Design">
      <h4>Design department</h4>
      <div class="fiche-perso">
        <div class="perso-d">
          <img src="/images/womancart.jpg" alt="">
          <div class="nameNfunc">
            <p>Melanie Martinez</p>
            <p class="func">design lead</p>
          </div>
        </div>
        <div class="perso-d">
            <img src="/images/foucault.jpg" alt="">
          <div class="nameNfunc">
            <p>Michel Foucault</p>
            <p class="func">ui/ux designer</p>
          </div>
        </div>
      </div>
    </div>


    <div class="Dev">
      <h4>Development department</h4>
      <div class="fiche-perso">
        <div class="perso-dev">
          <img src="/images/James.jpg" alt="">
          <div class="nameNfunc">
            <p>Richard James</p>
            <p class="func">Back-End Developer</p>
          </div>
        </div>
        <div class="perso-dev">
            <img src="/images/camus.jpg" alt="">
          <div class="nameNfunc">
            <p>Albet Camus</p>
            <p class="func">Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    name:'MyDepartment'
}
</script>


<style scoped>
.perso-d,.perso-dev{
  border: 1px solid rgba(0, 0, 0, 0.203);
  border-radius: 20px;
  padding: .5em;
    display: flex;
    align-items: center;
    margin: 1em 0;
}
.perso-d p,.perso-dev p{
  margin: 0;
  font-weight: 800;
}

.func{
  color: rgba(0, 0, 0, 0.463);
  font-size: .8em;
}

img{
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-right: 1em;
}

</style>