<template>
   <section>
      <h5 class="text-slate-400 text-sm font-extrabold flex items-center gap-3">
         <Icon size="22" v-if="$slots.icon">
            <slot name="icon" />
         </Icon>

         <slot name="title" />

         <hr class="border-gray-700 flex-grow ml-2" />
      </h5>

      <div class="pt-3 flex flex-col gap-2">
         <slot name="content" />
      </div>
   </section>
</template>

<script>
import { defineComponent } from "vue";
import { Icon } from "@vicons/utils";

export default defineComponent({
   components: {
      Icon,
   },
});
</script>

<style lang="scss" scoped></style>
