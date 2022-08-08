<template>
  <nav
    class="py-4 mt-1"
    :class="
      mode == 'dark' ? 'bg-[#222222] text-white' : 'bg-white text-black'
    "
  >
    <div class="my-container flex flex-row-reverse items-center">
      <span @click="listStatus = true" class="bar-icon ml-5 mt-2 cursor-pointer"
        ><i class="fa-solid fa-bars"></i>
              </span>
      <h1
        class="logo ml-16 flex justify-end max768:flex-grow"
      >
        <nuxt-link to="/" exact class="text-2xl flex gap-3 font-bold hover:text-mainColor">
          <span>Blog </span>
          <span class="border-bottom: 2px solid;">|</span>
          <span class="font-bold">مدونة</span>
         
        </nuxt-link>
      </h1>
      <ul :class="listStatus ? 'show' : ''" class="nav-links">
        <li @click="listStatus = false" class="close-icon text-3xl text-mainColor">
          <font-awesome-icon class="text-2xl" icon="close" />
        </li>
        <li>
          <nuxt-link class="hover:text-mainColor" to="/" exact> الرئيسية</nuxt-link>
        </li>
        <li>
          <nuxt-link class="hover:text-mainColor" to="/reports">التقارير والدراسات</nuxt-link>
        </li>
        <li>
          <nuxt-link  class="hover:text-mainColor" to="/articles"
            >المقالات</nuxt-link
          >
        </li>
      </ul>

      <div class="nav-icon flex flex-row-reverse w-fit gap-3">
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        <span @click=" ChangeMode()"
          ><i class="fa-regular fa-moon"></i></span>
      </div>
    </div>
  </nav>
</template>
<script lang="">
import { ref } from "vue";
export default {
  name: "navBar",
  data() {
    return {
      mode: "dark",
      listStatus: false,
    };
  },
  methods: {
    ChangeMode() {
      if(this.mode == 'dark'){
        this.mode = 'light'
      }
      else this.mode = 'dark'
    
    },
  },
};
</script>



<!-- // style of navbar  -->
<style lang="scss">
@import "./NavBar.scss";
</style>
