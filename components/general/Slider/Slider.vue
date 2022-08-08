<template>
  <div class="slider  bg-blend-multiply bg-[#000000d3] relative w-full  h-[513px] max768:h-[264px]">
    <div class="slide  w-full h-full " v-for="item in sliderData" :key="item.id" v-show="CurrentSlide == item.id" >
      <img :src="item.image" alt="" srcset="" class="absolute top-0 left-0 w-full h-full z-[-10]">
       <div  class="my-container h-full flex flex-col items-center justify-center z-10">
         <h2 class="text-5xl max768px:text-2xl  text-white mb-4 text-center max768:mb-3">{{item.title}}</h2>
        <p class="text-2xl max768:text-sm max768:w-[343px] text-center text-[#ECEEED] max-w-[815px]">{{item.text}}</p>
       </div>
      </div>
     
      <ul class="list-pulit flex items-center justify-center z-20 absolute bottom-8 gap-2 left-0 w-full">
          <li v-for="n in 5 " :key="n" @click="CurrentSlide = `${n}`" class="w-2 h-2 rounded-full border-[1px] " :class="CurrentSlide == `${n}`  ? 'bg-mainColor border-mainColor' : 'bg-transparent border-white'"></li>
      </ul>
  <div class="my-container absolute z-20 top-2/4 left-1/2 translate-x-[-50%] flex items-center justify-between max768:hidden">
    <img src="@/assets/images/slider-prev.png" @click="DecreasSlideIndex" class="rounded-full hover:text-white hover:border-mainColor hover:bg-mainColor" alt="" srcset="">
        <img src="@/assets/images/slider-next.png" @click="IncreasSlideIndex" class="rounded-full hover:text-white hover:border-mainColor hover:bg-mainColor" alt="" srcset="">
</div>
  </div>
</template>



<script>
import data from  '@/assets/json/slider.json';
export default {
  data() {
    return {
      CurrentSlide : 1,
      sliderData : data,
    }
  },
  methods:{
      IncreasSlideIndex(){
          if(this.CurrentSlide <5 ) this.CurrentSlide++
      },
      DecreasSlideIndex(){
          if(this.CurrentSlide > 1 ) this.CurrentSlide--
      }
  }
};
</script>

<style>


</style>
