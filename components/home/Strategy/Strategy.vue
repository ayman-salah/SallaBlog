.<template>
    <div class="my-container">
        <img src="@/assets/images/stratgy.png" alt="" srcset="">
        <div>
            <ideaCard :class="'strategy'"/>
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
@import './Strategy.scss';
</style>