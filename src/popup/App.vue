<template>
   <main id="container" class="bg-slate-900">
      <div id="main">
         <HeaderSection />
         <ContentSection />
      </div>
   </main>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import HeaderSection from "./components/HeaderSection.vue";
import ContentSection from './components/ContentSection.vue';

export default defineComponent({
  components: {
    HeaderSection,
    ContentSection,
  }
})
</script>

<style lang="scss" scoped></style>
