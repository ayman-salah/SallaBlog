<template>
  <div class="my-container pt-16">
    <h2 class="reports-title">التقارير والدراسات</h2>
    <div class="reports">
      <ViewsCard
        v-for="item in Reports"
        :key="item.id"
        :class="'busineesidea'"
        :auther="item.auther"
        :title="item.title"
        :question="item.question"
        :info="item.info"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script>
import ViewsCard from "@/components/general/ViewsCard/ViewsCard.vue";
import Reports from "@/assets/json/Reports.json";
export default {
  head() {
    return {
      title: "التقارير",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "صفحة التقارير على موقع مدونتي يقوم بعرض كافة التقارير التي تخص جميع المواضيع المهمة في مجال التجارة الإكترونية",
        },
      ],
    };
  },

  components: {
    ViewsCard,
  },
  data() {
    return {
      Reports: Reports,
    };
  },
};
</script>

<style lang="scss">
.reports {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  justify-content: flex-end;
}
.reports-title {
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 40px;
  text-align: center;
}
</style>
