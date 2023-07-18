<script >
import AppMain from './components/AppMain.vue'

export default{
  data(){
    return{

    }
  },
  components:{
    AppMain,
  }
}
</script>

<template>

  <header>
    <div class="headerContainer d-flex align-items-center justify-content-around bg-white">
        <div class="d-flex text-black">
          Logo
        </div>
        <div class="d-flex gap-5">
          <a href="/">Home</a>
          <a href="/about-us">About-us</a>
          <a href="/projects">Projects</a>
        </div>
      </div>
  </header>

  <router-view></router-view>


</template>

<style scoped>
  .headerContainer{
    width: 100%;
    height: 70px;
  }


</style>
