<template>
  <div class="the-most-reading pt-16">
    <div class="my-container">
      <div class="box-container">
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
      <div class="info flex flex-row-reverse items-center justify-between">
        <div class="photo w-full  relative">
          <img src="@/assets/images/TreadsHeader.png" alt="" srcset="">
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