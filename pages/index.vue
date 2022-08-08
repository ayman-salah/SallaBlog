<template>
  <div>
    
    <Slider />
    <MostReading />
    <businessidea />
     <hr class="my-container my-16 h-[2px] bg-[#ECEEED] max576:hidden"  />
    <Strategy />
    <MostViews />
    <Treadsidea />
    
  </div>
</template>

<script>
import MostReading from "@/components/home/MostReading/MostReading.vue" ;
import MostViews from "@/components/home/MostViews/MostViews.vue";
import businessidea from "@/components/home/businessidea/businessidea.vue";
import Strategy from "@/components/home/Strategy/Strategy.vue";
import Treadsidea from "~/components/home/Treadsidea/Treadsidea.vue";
import Slider from "~/components/general/Slider/Slider.vue";
export default {
  name: "index",
    data() {
        return {
            MostReadingData : [],
            posts : []

        }; 
    },
   
    
    components: { MostReading, MostViews, businessidea, Strategy, Treadsidea, Slider }
};
</script>
