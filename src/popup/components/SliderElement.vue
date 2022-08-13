<template>
   <div class="flex flex-col gap-3 text-white">
      <span class="text-slate-200 text-md font-medium switch-label">{{ label }}</span>
      <n-slider v-model:value="value" :min="300" :max="800" :step="10" :format-tooltip="formatTooltip" />
   </div>
</template>

<script>
import { defineComponent } from "vue";
import { NSlider } from "naive-ui";

export default defineComponent({
   components: {
      NSlider,
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
      value: 520,
      timeoutDebounce: {},
   }),
   mounted() {
      chrome.storage.sync.get(this.id, (result) => {
         this.value = result[this.id];
      });
   },
   watch: {
      value: {
         handler(newValue, _oldValue) {
            clearTimeout(this.timeoutDebounce);
            this.timeoutDebounce = setTimeout(() => {
               chrome.storage.sync.set(
                  {
                     [this.id]: newValue,
                  },
                  () => {}
               );
            }, 200);
         },
      },
   },
   methods: {
      formatTooltip(width) {
         return `${width}px`;
      },
   },
});
</script>

<style lang="scss" scoped>
.switch-label {
   width: 225px;
}
</style>
