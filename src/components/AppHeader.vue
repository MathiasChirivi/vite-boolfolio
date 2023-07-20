<script >

export default{
    name:"AppHeader",
  data(){
    return{
      navLinks:[
        {label:"Home", name: "Home" },
        {label:"About-us", name: "About-us" },
        {label:"Projects", name: "Projects" },
        // { label: "Testa pagina di errore", name: "error", params: { code: 404 } },
      ]
    }
  },

}
</script>

<template>
  <header>
    <div class="headerContainer text-black d-flex align-items-center justify-content-around bg-white"> 
      <div v-for="navLink in navLinks" >
        <router-link :to="{name: navLink.name, params: navLink.params }" >{{ navLink.label }}</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .headerContainer{
    width: 100%;
    height: 70px;
  }


</style>
