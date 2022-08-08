<template>
    <div class="comment " >
        <h2 class="flex justify-between flex-row-reverse mb-2 text-sm text-heading">
            <span>{{auther}}</span>
            <h3 class="text-gray-300 flex items-center gap-1">
                <span class="text-sm ">منذ {{date}}</span>
                <img  src="@/assets/images/clock.png" alt="clock image" srcset="">
            </h3>
        </h2>
        <p class="text-right text-textinfo font-normal text-sm">{{text}}</p>
          </div>
</template>
<script  lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    props:{
        id:{
            type:Number,
            default(){
                return 1
            }
        },
        auther:{
            type:String,
            default(){
                return 'أبو جود'
            }
        },text:{
            type:String,
            default(){
                return ''
            }
        },date:{
            type:String,
            default(){
                return 'ما مستقبل التجارة الإلكترونية ؟'
            }
        }
    }
})
</script>
<style lang="scss" scoped>
</style>