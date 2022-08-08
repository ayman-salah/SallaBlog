<template>
    <div class="box " :class="customClass">
              <img v-if="image" :src="image" alt="idea image" srcset="">
              <div class="box-idea">
                  <h3>{{title}}</h3>
                  <h2 ><nuxt-link to="/" class="hover:text-mainColor">{{question}}</nuxt-link> </h2>
                  <p>{{info}}</p>
                  <h4>
                      <span class="pl-2">بواسطة</span>
                      <span>{{auther}}</span>
                  </h4>
              </div>
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
                return 'عبد الله عادل'
            }
        },title:{
            type:String,
            default(){
                return 'أفكار البزنس'
            }
        },question:{
            type:String,
            default(){
                return 'ما مستقبل التجارة الإلكترونية ؟'
            }
        },info:{
            type:String,
            default(){
                return 'من المتوقع أن تزيد المبيعات عن 1.3 تريليون عام 2014 إلى 4.5 تريليون في عام 2021'
            }
        },
        image:{
            type:String,
            default(){
                return ''
            }
        },
        customClass:{
            type:String ,
            default(){
                return ''
            }
        }


    }
})
</script>
<style lang="scss" scoped>
@import '@/assets/Css/Sass/variables';
@import './ideaCard.scss'
</style>