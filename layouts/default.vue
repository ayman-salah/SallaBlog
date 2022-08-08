<template>
  <div>
    <NavBar />
    <nuxt />
    <footer-vue />
  </div>
</template>

<script>
import FooterVue from "~/components/Footer/Footer.vue";
import NavBar from "~/components/NavBar/NavBar.vue";
export default {
  
  name: "default",
  components: { NavBar, FooterVue },
};
</script>
