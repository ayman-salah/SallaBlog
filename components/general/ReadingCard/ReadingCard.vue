<template>
           <div class="box relative bg-blend-multiply bg-[#00000083]" >
                <img :src="image" alt="the most Reading image " class="absolute top-0 left-0 w-full h-full z-[-10] object-cover" srcset="">
                <h2>{{title}}</h2>
                <p>{{info}}</p>
                <h3>
                    <span class="pl-1">بواسطة</span>
                    <span>{{auther}}</span> 
                </h3>
           </div>
</template>
<script  >

export default {
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
}
</script>
<style lang="scss" scoped>
@import '@/assets/Css/Sass/variables';
@import './ReadingCard.scss'
</style>