<template>
      <div class="pl-2 w-fit">
               <nuxt-link class="flex items-center justify-between " to="/reports">
                   <span class="font-normal text-base leading-6 moor-icon text-mainColor mr-1 ">
                       <i class="fa-solid fa-angle-left"></i>
                       </span>
               <span class="hover:text-mainColor">عرض المزيد</span>
               </nuxt-link>
           </div>
</template>

<script >

export default {
    name:'ShowMoor'
}
</script>
<style lang="scss" scoped>
@import './ShowMoor.scss'
</style>