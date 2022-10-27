<script setup lang="ts">
import TheSeparator from "./TheSeparator.vue";

const props = defineProps({
  latestArticlePath: {
    type: String,
    required: true,
  },
});

const latestArticlePath = computed(() => props.latestArticlePath);
</script>

<template>
  <div class="mobile-menu relative h-full w-[100%]">
    <div
      class="mobile-menu absolute z-[100] h-[100vh] w-full bg-accent text-white dark:bg-daccent"
    >
      <div class="p-5 font-bold">
        <ul>
          <NuxtLink to="/">
            <li class="p-2 underline underline-offset-8">Home</li>
          </NuxtLink>
          <NuxtLink :to="`/articles${latestArticlePath}`">
            <li class="p-2 underline underline-offset-8">Articles</li>
          </NuxtLink>
        </ul>
      </div>
      <TheSeparator></TheSeparator>
      <div class="h-full bg-primary p-5 dark:bg-dprimary">
        <h2 class="p-2 font-bold text-white">Articles</h2>

        <div class="p-2">
          <ContentNavigation v-slot="{ navigation }">
            <ul class="pl-2 text-sm font-normal dark:text-white">
              <li v-for="link of navigation" :key="link._path">
                {{ link.title }}
                <ul v-if="link.children" class="ml-2 mb-4 mt-2">
                  <li
                    v-for="child of link.children"
                    :key="child._path"
                    class="pb-2 leading-8 text-secondary underline underline-offset-8"
                  >
                    <NuxtLink :to="`/articles${child._path}`">
                      - {{ child.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </ContentNavigation>
        </div>
      </div>
    </div>
  </div>
</template>
