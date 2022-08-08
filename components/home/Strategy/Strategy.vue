.<template>
    <div class="my-container">
        <div class="relative h-[358px] pt-20 pr-32 flex items-center justify-end max768:h-64 max768:py-12 max768:px-8 max768:justify-center max768:mt-12 border-2">
            <img src="@/assets/images/stratgy.png" alt="" srcset="" class="absolute top-0 left-0  w-full  h-full z-[-10] object-cover  ">
        <div>
            <ideaCard :class="'strategy'" class=""/>
        </div>
            </div>
    </div>
</template>
<script >
import ideaCard from "@/components/general/ideaCard/ideaCard.vue";

export default {
components:{
    ideaCard
}
}
</script>

<style lang="scss" scoped>

</style>