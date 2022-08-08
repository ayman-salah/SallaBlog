
<template>
  <div class="mb-20 relative py-12 text-white max768:mb-10 ">
    <!-- hero image  -->
    <img src="@/assets/images/Articles/HeroErea.png" class="absolute top-0 left-0 w-full h-full z-[-1]"  alt="Hero Erea" srcset="">
    <div class="my-container flex flex-col items-end ">
      <h4 class="font-normal text-sm mb-4 flex flex-row-reverse">
        <router-link  to="/" exact> 
            <span class="text-mainColor ml-1">الرئيسية<i class="fa-solid fa-home pl-2"></i></span>
        </router-link>
        <span class="[text-[#F7F7F7]">المقالات /</span>
      </h4>
      <h2 class="w-[767px] font-bold text-5xl leading-[74px] mb-4 text-right max768:w-[335px] max768:text-3xl">خطوات عملية حول كيفية بيع المنتجات على الإنترنت</h2>
      <h3 class="flex flex-row-reverse items-center">
        <img class="w-9 h-9 pl-3 object-contain" src="@/assets/images/Articles/Avatar.png" alt="" srcset="" />
        <span class="text-sm text-[#F7F7F7]">بواسطة / {{auther}} | منذ : {{ArticleDate}}</span>
      </h3>
    </div>
  </div>
</template>


<script >

export default {
  data(){
    return {
       auther : 'أحمد',
       ArticleDate : '1/4/2022'
    }
  }
}
</script>

<style lang="scss">
// @import "./ArticlesHeader.scss";
</style>
