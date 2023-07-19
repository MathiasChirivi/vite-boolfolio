<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: "Vue API",

  components: {
    AppHeader
  }
}
</script>

<template>
    <AppHeader />

  <router-view></router-view>

</template>