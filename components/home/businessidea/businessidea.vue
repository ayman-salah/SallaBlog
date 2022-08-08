<template>
  <div class="the-most-reading pt-16">
    <div class="my-container">
      <div class="info flex flex-row-reverse items-center justify-between">
       <div class="">
          <img src="@/assets/images/busineesidea/item4.png" alt="" srcset="">
         <ideaCard  class="mt-5" />
        </div>
      </div>
      <div class="box-container">
         <ideaCard v-for="item in busniessidea" :key="item.id" :class="'busineesidea'"
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
  props: {
    testprop: {
      type: String,
      default() {
        return "ahmed salah";
      },
    },
  }
  
}
</script>
<style lang="scss" scoped>
@import './businessidea.scss';
</style>