 <template>
  <div class="my-container">
    <div class="tabs-titles ">
      <div>
        <h2 :class="tabIndex == 1 ? 'active' : ''" @click="tabIndex = 1" >الأكثر مشاهدة</h2>
        <h2 :class="tabIndex == 2 ? 'active' : ''" @click="tabIndex = 2" >الأكثر شهرة</h2>
        <h2 :class="tabIndex == 3 ? 'active' : ''" @click="tabIndex = 3" >الأكثر قراءة</h2>
      </div>
      <h3 class="flex ">
        <img
          src="@/assets/images/arrow-left.png"
          alt="arror right"
          srcset=""
          @click="increasTabIndex"
          class="mr-3"
        />
        <img
          src="@/assets/images/arrow-right.png"
          alt="arror right"
          srcset=""
          @click="decreasTabIndex"
        />
      </h3>
    </div>
    <div class="tabs-content ">
      <div v-show="tabIndex == 1"  class="most-views">
           <ViewsCard v-for="item in MostViews" :key="item.id" :class="'busineesidea'"
          :auther="item.auther" 
          :title="item.title" 
          :question="item.question" 
          :info="item.info" 
          :image="item.image" 
          />
      </div>
      <div v-show="tabIndex == 2" class="most-common">
       <ViewsCard v-for="item in MostCommon" :key="item.id" :class="'busineesidea'"
          :auther="item.auther" 
          :title="item.title" 
          :question="item.question" 
          :info="item.info" 
          :image="item.image" 
          /></div>
      <div v-show="tabIndex == 3" class="most-reading">
       <ViewsCard v-for="item in MostReading" :key="item.id" :class="'busineesidea'"
          :auther="item.auther" 
          :title="item.title" 
          :question="item.question" 
          :info="item.info" 
          :image="item.image" 
          />
          </div>
    </div>
    <div class="show-moor">
      <ShowMoor />
    </div>
  </div>
</template>

<script >
import ViewsCard from "@/components/general/ViewsCard/ViewsCard.vue";
import ShowMoor from "@/components/general/ShowMoor/ShowMoor.vue";
import MostReading from '@/assets/json/MostReading.json';
import Mostviews from '@/assets/json/MostViews.json';
import MostCommon from '@/assets/json/MostCommon.json';

export default {
  
   data() {
        return {
            tabIndex : 1,
            MostViews : Mostviews,
            MostReading : MostReading,
            MostCommon : MostCommon
        };
    },
  methods:{
  decreasTabIndex() {
     if(this.tabIndex === 3) this.tabIndex = 2
     else if(this.tabIndex === 2) this.tabIndex = 1
     else this.tabIndex = 3
 },
 increasTabIndex(){
    if(this.tabIndex === 1) this.tabIndex = 2
    else if(this.tabIndex === 2) this.tabIndex = 3
    else this.tabIndex = 1
 }
  },
  components: {
    ViewsCard,
    ShowMoor
}
}
</script>

<style lang="scss" scoped>
@import "./Mostviews.scss";
</style>