<template>
  <div class="my-container mt-12">
    <div class="tabs-titles flex items- gap-[10px] flex-row-reverse">
      <div
        class="flex flex-row-reverse items-center p-[10px] gap-[30px] bg-white flex-1 max768:justify-center max768:gap-5"
      >
        <h2
          v-for="item in DataSource"
          :key="item.id"
          :class="tabIndex == item.id ? 'active' : ''"
          @click="tabIndex = item.id"
          class="text-2xl text-gray-400 relative pb-3 cursor-pointer max768:text-xl"
        >
          {{ item.tabName }}
        </h2>
      </div>
      <h3 class="arrows flex m-auto justify-between h-10 max768:hidden">
        <img
          src="@/assets/images/arrow-left.png"
          alt="arror right"
          srcset=""
          @click="
            tabIndex == 3 ? (tabIndex = 2) : tabIndex == 2 ? (tabIndex = 1) : 3
          "
          class="mr-3 cursor-pointer"
        />
        <img
          src="@/assets/images/arrow-right.png"
          alt="arror right"
          srcset=""
          @click="
            tabIndex == 1 ? (tabIndex = 2) : tabIndex == 2 ? (tabIndex = 3) : 1
          "
          class="cursor-pointer"
        />
      </h3>
    </div>
    <div class="tabs-content">
      <div
        v-for="n in DataSource"
        :key="n.id"
        v-show="tabIndex == n.id"
        class="tab grid gap-[30px] justify-end mt-[18px]"
      >
        <ViewsCard
          v-for="item in n.data"
          :key="item.id"
          :auther="item.auther"
          :title="item.title"
          :question="item.question"
          :info="item.info"
          :image="item.image"
        />
      </div>
    </div>
    <div class="justify-center items-center mt-[18px] hidden max768:flex">
      <ShowMoor />
    </div>
  </div>
</template>

<script>
import ViewsCard from "@/components/general/ViewsCard/ViewsCard.vue";
import ShowMoor from "@/components/general/ShowMoor/ShowMoor.vue";
import MostReading from "@/assets/json/MostReading.json";
import Mostviews from "@/assets/json/MostViews.json";
import MostCommon from "@/assets/json/MostCommon.json";

export default {
  data() {
    return {
      tabIndex: 1,
      DataSource: [
        {
          id: 1,
          tabName: "الأكثر مشاهدة",
          data: Mostviews,
        },
        {
          id: 2,
          tabName: "الأكثر شهرة",
          data: MostCommon,
        },
        {
          id: 3,
          tabName: "الأكثر قراءةَ",
          data: MostReading,
        },
      ],
    };
  },
  methods: {},
  components: {
    ViewsCard,
    ShowMoor,
  },
};
</script>

<style lang="scss" scoped>
.tab {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
}
.tabs-titles {
  h2 {
    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #5dd5c4;
    }

    &:not(.active) {
      &:hover {
        &::before {
          animation: show-border 0.2s linear forwards;
        }
      }
    }
    @keyframes show-border {
      100% {
        width: 100%;
      }
    }

    &.active {
      &::before {
        width: 100%;
        height: 3px;
      }

      color: #000;
    }
  }
}
</style>
