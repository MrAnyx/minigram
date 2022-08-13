<template>
   <section class="bg-slate-800 p-5 flex flex-col gap-6">
      <SectionContainer id="first">
         <template #icon>
            <LayoutBoard />
         </template>
         <template #title>Feed</template>
         <template #content>
            <SwitchElement label="Hide suggestions" id="feedSuggestions" />
            <SwitchElement label="Hide stories" id="feedStories" />
            <!-- <SliderElement label="Feed width" id="feedWidth" /> -->
         </template>
      </SectionContainer>

      <SectionContainer>
         <template #icon>
            <LayoutNavbar />
         </template>
         <template #title>Header</template>
         <template #content>
            <SwitchElement label="Hide home" id="headerHome" />
            <SwitchElement label="Hide messages" id="headerMessages" />
            <SwitchElement label="Hide publish" id="headerPublish" />
            <SwitchElement label="Hide explore" id="headerExplore" />
            <SwitchElement label="Hide likes" id="headerLikes" />
            <SwitchElement label="Hide profile" id="headerProfile" />
         </template>
      </SectionContainer>

      <SectionContainer>
         <template #icon>
            <Photo />
         </template>
         <template #title>Posts</template>
         <template #content>
            <SwitchElement label="Hide comments" id="postComments" />
            <SwitchElement label="Hide comment writing area" id="postCommentWriting" />
            <SwitchElement label="Hide share button" id="postShareIcon" />
            <SwitchElement label="Hide likes count" id="postLikesCount" />
            <SwitchElement label="Hide side section" id="postSideSection" />
         </template>
      </SectionContainer>
   </section>
</template>

<script>
import { defineComponent } from "vue";
import { LayoutBoard, LayoutNavbar, Photo } from "@vicons/tabler";
import SectionContainer from "./SectionContainer.vue";
import SwitchElement from "./SwitchElement.vue";
// import SliderElement from "./SliderElement.vue";

export default defineComponent({
   components: {
      SectionContainer,
      SwitchElement,
      LayoutBoard,
      LayoutNavbar,
      Photo,
      // SliderElement,
   },
});
</script>

<style lang="scss" scoped></style>
