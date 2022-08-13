<template>
   <header class="border-slate-600 px-5 py-3">
      <a href="https://github.com/MrAnyx/minigram" target="_blank">
         <Icon size="20" class="text-slate-400 hover:text-orange-500">
            <BrandGithub />
         </Icon>
      </a>
      <h1 class="text-xl font-bold text-slate-200">Minigram</h1>
      <a href="https://twitter.com/MrAnyx" target="_blank">
         <Icon size="20" class="text-slate-400 hover:text-orange-500">
            <BrandTwitter />
         </Icon>
      </a>
   </header>
</template>

<script>
import { defineComponent } from "vue";
import { BrandGithub, BrandTwitter } from "@vicons/tabler";
import { Icon } from "@vicons/utils";

export default defineComponent({
   components: {
      Icon,
      BrandGithub,
      BrandTwitter,
   },
});
</script>

<style lang="scss" scoped>
header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom-width: 1px;

   a {
      height: 20px;
   }
}
</style>
