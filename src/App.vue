<template>
  <div id="app">
    <Navbar class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Product</router-link>
    </Navbar>
    <router-view></router-view>
<!--    <Home />-->
<!--    <Footer/>-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from '@/views/Home.vue'
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Footer
  }
}
</script>

<style>
/*html, body {*/
/*  height: 100%;*/
/*}*/
#app {
  position: relative;
}
.navbar {
  position: absolute;
  z-index: 2;
}
</style>
