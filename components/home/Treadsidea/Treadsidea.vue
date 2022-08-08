<template>
  <div class="the-most-reading pt-16">
    <div class="my-container flex justify-between gap-8 flex-row-reverse max768:flex-col">
      <div class="box-container flex justify-between gap-5 flex-col items-stretch w-[270px] max768:w-full">
        <ideaCard
          v-for="item in busniessidea"
          :key="item.id"
          :class="'busineesidea'"
          :auther="item.auther"
          :title="item.title"
          :question="item.question"
          :info="item.info"
        />
      </div>
      <div class="info flex flex-grow flex-row-reverse items-center justify-between">
        <div class="photo w-full  relative flex items-end justify-end px-[18px] pb-6 pt-72 ">
          <img src="@/assets/images/TreadsHeader.png" alt="" srcset="" class="absolute top-0 left-0 w-full h-full object-cover z-[-10]">
          <ideaCard :class="'treads-idea'"/> 
        </div>
      </div>
    </div>
  </div>
</template>
<script >
// import custome components
import ideaCard from "@/components/general/ideaCard/ideaCard.vue";
import ReadingCard from '@/components/general/ReadingCard/ReadingCard.vue';
import busniessidea from '@/assets/json/busniessidea.json';
export default{
 data (){
   return {
     busniessidea : busniessidea
   }
 },
 components: {
    ideaCard,
    ReadingCard,
  }
 
  
}
// import '../../../assets/json/MoostReading.json'
</script>
<style lang="scss" scoped>
@import "./Treadsidea.scss";
</style>