<template>
    <div>
        <ArticlesHeader />
        <div class="my-container">
            <div class="article-content p-[60px] max768:p-5 text- bg-white">
                <img src="@/assets/images/Articles/item1.png" alt="" srcset="" />
                <div class="
            flex flex-row-reverse
            gap-5
            m-auto
            justify-center
            items-center
            py-2
            px-5
            w-36
            bg-orange-400
            rounded-[50px]
            mt-5
            mb-8
          ">
                    <span class="underline text-2xl text-white cursor-pointer"
                        :class="FontSizeClass == 'text-lg' ? 'opacity-100' : 'opacity-50'"
                        @click="FontSizeClass = 'text-lg'">A</span>
                    <span class="underline text-xl text-white cursor-pointer"
                        :class="FontSizeClass == 'text-base' ? 'opacity-100' : 'opacity-50'"
                        @click="FontSizeClass = 'text-base'">A</span>
                    <span class="underline text-base text-white cursor-pointer"
                        :class="FontSizeClass == 'text-sm' ? 'opacity-100' : 'opacity-50'"
                        @click="FontSizeClass = 'text-sm'">A</span>
                </div>
                <!-- // section article  -->
                <p class="mb-8 text-right" :class="FontSizeClass">
                    من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار من
                    التسويق بشكل قوي وبأدوات سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية
                    وإرسالها للعملاء مع تحديد الشريحة من التسويق بشكل قوي وبأدوات سهلة
                    وبسيطةحرصنا من تمكين التجار من التسويق <br /><br />بشكل قوي وبأدوات
                    سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء مع تحديد
                    الشريحة من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار
                    من التسويق بشكل قوي وبأدوات سهلة وبسيطة.<br />
                    حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء مع تحديد الشريحة من
                    التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين من التسويق بشكل قوي
                    وبأدوات سهلة وبسيطةحرصنا من تمكين التجار من التسويق بشكل قوي وبأدوات
                    سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء مع تحديد
                    الشريحة
                </p>
                <!-- // section article  -->
                <h2 class="mb-5 text-right text-2xl border-r-[3px] pr-2 border-mainColor">
                    ما فوائد بيع المنتجات على الإنترنت ؟
                </h2>
                <p class="mb-8 text-right" :class="FontSizeClass">
                    من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار من
                    التسويق بشكل قوي وبأدوات سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية
                    وإرسالها للعملاء مع تحديد الشريحة من التسويق بشكل قوي وبأدوات سهلة
                    وبسيطةحرصنا من تمكين التجار من التسويق <br /><br />بشكل قوي وبأدوات
                    سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء مع تحديد
                    الشريحة من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار
                    منيحة من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار من
                    التسويق بشكل قوي وبأدوات سهلة وبسيطة. <br />حيث يمكنك عمل حملات
                    تسويقية وإرسالها لتجار من التسويق بشكل قوي وبا للعملاء<br />
                    مع تحديد الشريحة من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين
                    التجار من التسويق بشكل قوي وبأدوات سهلة وبسيطة. حيث يمكنك عمل حملات
                    تسويقية وإرسالها للعملاء مع تحديد الشريحة
                </p>
                <!-- // section article  -->

                <h2 class="mb-8 text-right text-2xl border-r-[3px] pr-2 border-mainColor">
                    ما الذي ستبيعه على الإنترنت ؟
                </h2>
                <img class="mb-8" src="@/assets/images/Articles/item2.png" />
                <p class="mb-8 text-right" :class="FontSizeClass">
                    من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار من
                    التسويق بشكل قوي وبأدوات سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية
                    وإرسالها للعملاء مع تحديد الشريحة من التسويق بشكل قوي وبأدوات سهلة
                    وبسيطةحرصنا من تمكين التجار من التسويق <br /><br />بشكل قوي وبأدوات
                    سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء مع تحديد
                    الشريحة من التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار
                    من التسويق بشكل قوي وبأدوات سهلة وبسيطة.<br />
                    حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء مع تحديد الشريحة من
                    التسويق بشكل قوي وبأدوات سهلة وبسيطةحرصنا من تمكين التجار من التسويق
                    بشكل قوي وبأدوات سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية<br />
                    وإرسالها للعملاء مع تحديد الشريحة من التسويق بشكل قوي وبأدوات سهلة
                    وبسيطةحرصنا من تمكين التجار من التسو قوي وبأدوات سهلة وبسيطةحرصنا من
                    تمكين التجار من التسويق بشكل قوي وبأدوات سهلة وبسيطة.<br />
                </p>

                <!-- // links section  -->
                <div class="
            links
            flex
            justify-between
            flex-row-reverse
            items-center
            py-5
            my-8
            border-y border-[#eee]
            max768:flex-col max768:gap-3
          ">
                    <div class="flex gap-3">
                        <h2 class="
                p-2
                w-fit
                text-sm text-gray-400
                h-9
                bg-[#F7F7F7]
                rounded-[100px]
              ">
                            بيع المنتجات#
                        </h2>
                        <h2 class="
                p-2
                w-fit
                text-sm text-gray-400
                h-9
                bg-[#F7F7F7]
                rounded-[100px]
              ">
                            استراتيجيات#
                        </h2>
                        <h2 class="
                p-2
                w-fit
                text-sm text-gray-400
                h-9
                bg-[#F7F7F7]
                rounded-[100px]
              ">
                            التسويق#
                        </h2>
                    </div>
                    <ul class="flex gap-3">
                        <li>
                            <a href="https://www.linkedin.com/feed/?trk=eml-email_job_alert_digest_01-header-32-home"><img
                                    src="@/assets/images/social/linkedin.png" /></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/"><img src="@/assets/images/social/twitter.png" /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/"><img src="@/assets/images/social/facebook.png" /></a>
                        </li>
                    </ul>
                </div>
                <!-- // comment section  -->
                <div class="comments">
                    <h2 class="
              text-right
              font-normal
              leading-8
              text-xl
              mb-5
              border-r-[3px]
              pr-2
              border-mainColor
            ">
                        ({{ Comments.length }}) التعليقات
                    </h2>
                    <Comment v-for="item in Comments" :key="item.id" :id="item.id" :auther="item.auther"
                        :text="item.text" :date="item.date" class="last:border-0 mb-5 pb-5 border-b-2 border-[#eee]" />
                </div>
                <!-- form section  -->
                <h2 class="
            mb-5
            mt-3
            text-right text-2xl
            border-r-[3px]
            pr-2
            border-mainColor
          ">
                    كن أول من يعلق
                </h2>
                <h3 class="text-sm text-right text-heading mb-3">اكتب تعليقك</h3>
                <GeneralForm />
            </div>
        </div>
    </div>
</template>
<script >
import ArticlesHeader from "@/components/ArticlesHeader/ArticlesHeader.vue";
import Comment from "@/components/general/Comment/Comment.vue";
import GeneralForm from "@/components/general/Form/GeneralForm.vue";
import CommentsData from "@/assets/json/Comments.json";
export default {
     head() {
    return {
      title: "المقالات",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "صفحة المقالات على موقع مدونتي يعرض جميع المقالات في المواضيع المستجدة في عالم التسويق الرقمي والتجارة الإلكترونية ",
        },
      ],
    };
  },
    components: { ArticlesHeader, Comment, GeneralForm },

    data() {
        return {
            CountComment: 3,
            FontSizeClass: "text-lg",
            Comments: CommentsData,
        };
    },
    methods: {},
};
</script>