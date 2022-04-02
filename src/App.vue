<template>
  <div id="restaurant-forum">
    <Navbar />
    <main
      role="main"
      class="mt-5 bg-white"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import 'bootstrap' // JS file，因為在 node_module/bootstrap/package.json 的 main 中，已有指定預設路徑為 dist/js/bootstrap，在這種情況下就可以直接簡寫
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
  main {
    margin-top: 65px !important;
  }
</style>
