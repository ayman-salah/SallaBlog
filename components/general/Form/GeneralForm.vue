<template>
      <form @submit.prevent="" class="flex flex-col items-end gap-5">
          <textarea
            v-model="NewComment"
            class="
              rounded-[3px]
              w-full
              text-right
              p-3
              resize-none
              border-[1px] border-[#eee]
              outline-mainColor
              caret-mainColor
              h-32
            "
            placeholder="برجاء كتابة التعليق الخاص بك "
          ></textarea>
          <div
            class="
              flex
              justify-between
              flex-row-reverse
              items-center
              gap-4
              w-full
            "
          >
            <div class="flex flex-col flex-grow items-end gap-3">
              <label class="text-sm" for="">الاسم</label>
              <input
                v-model="UserName"
                class="
                  w-full
                  text-right
                  p-3
                  border-[1px] border-[#eee]
                  rounded-[3px]
                  caret-mainColor
                  outline-none
                   text-xs
                "
                type="text"
                placeholder="برجاء إدخال الاسم"
              />
            </div>
            <div class="flex flex-col flex-grow items-end gap-3">
              <label class="text-sm" for="">البريد الإلكتروني</label>
              <input
                v-model="Email"
                class="
                  w-full
                  text-right
                  p-3
                  border-[1px] border-[#eee]
                  rounded-[3px]
                  caret-mainColor
                  outline-none
                  text-xs
                "
                type="text"
                placeholder="ادخال البريد الإلكتروني"
              />
            </div>
          </div>
          <button
            type="button"
            @click="Validation"
            class="
              w-60
              h-11
              text-center
              py-2
              px-16
              bg-mainColor
              rounded-[3px]
              text-white text-sm
              max768:w-full
            "
          >
            أضف التعليق
          </button>
        </form>
</template>

<script lang="ts">
import swal from "sweetalert";
import { defineComponent,ref } from "vue";

export default defineComponent({
      setup() {
          const NewComment = ref("");
    const UserName = ref("");
    const Email = ref("");
     return {  NewComment, UserName, Email };
    },
    methods: {
    Validation() {
      if (this.NewComment == "") swal("قم بكتابة تعليق","","error");
      else if (this.UserName == "") swal("يجب إدخال الاسم","","error");
      else if (this.Email == "") swal("يجب إدخال البريد الإلكتروني","","error");
      else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.Email)))swal("يجب كتابة البريد الإكتروني بالصيغة الصحيحة","Example@Example.com","error");
      else swal("تمت الإضافة", "تم إضافة التعليق بنجاح", "success");
    },
  },
})
</script>
