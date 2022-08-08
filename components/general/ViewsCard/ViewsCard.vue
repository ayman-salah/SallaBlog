<template>
  <div
    class="box bg-white flex justify-between gap-5 flex-col min-h-[160px] max992:min-h-fit"
    :class="customClass"
  >
    <nuxt-link to="/article">
      <img
        v-if="image"
        :src="image"
        alt="the most views image"
        srcset=""
        class="h-[230px] hover:opacity-[.8]"
      />
    </nuxt-link>
    <div class="box-view p-4 flex-grow text-right">
      <h3 class="mb-3 border-r-2 border-mainColor pr-2 text-sm">
        <nuxt-link class="hover:text-mainColor" to="/article">
          {{ title }}
        </nuxt-link>
      </h3>
      <h2 class="mb-3 text-xl text-gray-800">
        <nuxt-link class="hover:text-mainColor" to="/article">
          {{ question }}
        </nuxt-link>
      </h2>
      <p class="mb-3 text-base text-gray-800">
        <nuxt-link class="hover:text-mainColor" to="/article">
          {{ info }}
        </nuxt-link>
      </p>
      <h4 class="mb-3 text-sm text-gray-500">
        <span class="pl-2">بواسطة</span>
        <nuxt-link class="hover:text-mainColor" to="/article">
          <span>{{ auther }}</span>
        </nuxt-link>
      </h4>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    id: {
      type: Number,
      default() {
        return 1;
      },
    },
    auther: {
      type: String,
      default() {
        return "عبد الله عادل";
      },
    },
    title: {
      type: String,
      default() {
        return "أفكار البزنس";
      },
    },
    question: {
      type: String,
      default() {
        return "ما مستقبل التجارة الإلكترونية ؟";
      },
    },
    info: {
      type: String,
      default() {
        return "من المتوقع أن تزيد المبيعات عن 1.3 تريليون عام 2014 إلى 4.5 تريليون في عام 2021";
      },
    },
    image: {
      type: String,
      default() {
        return "";
      },
    },
    customClass: {
      type: String,
      default() {
        return "";
      },
    },
  },
});
</script>
<style lang="scss" scoped></style>
