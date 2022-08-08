<template>
    <div class="mt-14">
         <div class="subscrip">
             <h3>اشترك في النشرة البريدية </h3>
             <p>وكن أول من يعلم عن كل جديد في عالم التجارة الإلكترونية</p>
             <form @submit.prevent="">
                 <div>
                     <input placeholder="البريد الإلكتروني" v-model="Email" />
                     <img src="@/assets/images/gmail-icon.png" alt="">
                 </div>
                 <button @click="Validation">اشتراك</button>
             </form>
         </div>
        <div class="copy-right   py-5">
            <div class="my-container">

                <p class="rules">الشروط والأحكام</p>
            <div class="social-links">
                <h3>كن كاتباً معنا</h3>
                <ul>
                    <li><a href="#"><img src="@/assets/images/social/item1.png" alt="" srcset=""></a></li>
                    <li><a href="#"><img src="@/assets/images/social/item2.png" alt="" srcset=""></a></li>
                    <li><a href="#"><img src="@/assets/images/social/item3.png" alt="" srcset=""></a></li>
                    <li><a href="#"><img src="@/assets/images/social/item4.png" alt="" srcset=""></a></li>
                </ul>
            </div>
            <p class="copy-right-text">جميع الحقوق محفوظة لشركة مدونة 2022</p>
                    </div>
        </div>
    </div>

</template>
<script lang="ts">
import swal from "sweetalert";


export default {
     data() {
     return {   Email :"" };
    },
 methods: {
    Validation() {
     if (this.Email == "") swal("يجب إدخال البريد الإلكتروني","","error");
      else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.Email)))swal("يجب كتابة البريد الإكتروني بالصيغة الصحيحة","Example@Example.com","error");
      else {
          swal("تمت الإشتراك", "تم الاشتراك بنجاح", "success");
          this.Email = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/Css/Sass/variables.scss';
@import './Footer.scss';
</style>
