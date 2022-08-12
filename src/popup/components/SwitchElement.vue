<template>
   <div class="flex justify-between items-center">
      <span class="text-slate-200 text-md font-medium switch-label">{{ label }}</span>
      <n-switch v-model:value="active" @update:value="setState" size="small" :rail-style="railStyle" />
   </div>
</template>

<script>
import { defineComponent, toRefs, toRef } from "vue";
import { NSwitch } from "naive-ui";

export default defineComponent({
   components: {
      NSwitch,
   },
   props: {
      label: {
         require: true,
         type: String,
      },
      id: {
         required: true,
         type: String,
      },
   },
   data: () => ({
      active: false,
   }),
   created() {
      chrome.storage.sync.get(this.id, (result) => {
         this.active = result[this.id];
      });
   },
   methods: {
      railStyle({ checked }) {
         const style = {};
         if (checked) {
            style.background = "rgb(249, 115, 22)";
         } else {
            style.background = "rgb(95, 109, 122)";
         }
         return style;
      },
      setState(state) {
         chrome.storage.sync.set(
            {
               [this.id]: state,
            },
            () => {}
         );
      },
   },
});
</script>

<style lang="scss" scoped>
.switch-label {
   width: 225px;
}
</style>
