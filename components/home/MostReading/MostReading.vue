<template>
    <div class="the-most-reading pt-16">
        <div class="my-container ">
       <div class="info flex flex-row-reverse items-center justify-between">
           <h3 class="font-normal leading-7 text-2xl">الأكثر قراءةً</h3>
          <ShowMoor />
       </div>
       <div class="box-container flex flex-row justify-between items-center">
          <ReadingCard v-for="item in MostReadingData" :key="item.id" :class="'busineesidea'"
          :id="item.id"
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
<script>
import ReadingCard from '@/components/general/ReadingCard/ReadingCard.vue';
import ShowMoor from '@/components/general/ShowMoor/ShowMoor.vue';
import MostReadingData from '@/assets/json/MostReading.json'
export default {
     data() {
        return {
            MostReadingData : [],
        }
    },
    //  asyncData({$axios}){
    //  return $axios.$get('file:///E:/projects/01_Vue.js/salla-3/assets/json/MostReading.json').then(res =>{
    //   return {
    //     MostReadingData: res
    //   }
    //  })
    // },
    mounted(){
       this.MostReadingData = MostReadingData
    },
    
    computed:{
    },
    components: { ReadingCard, ShowMoor }
}
</script>
<style lang="scss" scoped>
@import './MostReading.scss'
</style>