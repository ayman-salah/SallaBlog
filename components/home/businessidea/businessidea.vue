<template>
  <div class="the-most-reading pt-16">
    <div class="my-container flex justify-between gap-8 flex-row-reverse max992:flex-col">
      <div class=" flex flex-col gap-[18px] flex-grow justify-between items-center ">
       <div class="w-full h-full">
          <img src="@/assets/images/busineesidea/item4.png" alt="" srcset="" class="flex-1 w-full  object-cover">
         <ideaCard  class="mt-5" />
        </div>
      </div>
      <div class=" flex justify-between gap-5 flex-col flex-grow items-stretch">
         <ideaCard v-for="item in busniessidea" :key="item.id" :class="'busineesidea'" class="w-full"
          :auther="item.auther" 
          :title="item.title" 
          :question="item.question" 
          :info="item.info" 
          :image="item.image" 
          />
      </div> 
    </div>
  </div>
</template>
<script >
// import custome components 
import ideaCard from "@/components/general/ideaCard/ideaCard.vue"
import busniessidea from '@/assets/json/busniessidea.json';
export default {
  data() {
    return {
      busniessidea : busniessidea
    }
  },
    components:{
        ideaCard
    },
}
</script>
<style lang="scss" scoped>
</style>