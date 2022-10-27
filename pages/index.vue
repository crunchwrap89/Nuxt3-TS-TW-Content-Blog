<script setup lang="ts">
import TheSeparator from "~~/components/layout/TheSeparator.vue";

definePageMeta({
  pageTransition: false,
});

useHead({
  title: "marcusn.dev | Learn how to code with Marcus Nilsson.",
  meta: [{
    name: 'description',
    content: "Find articles and step by step guides on how to code fun projects. Become or hire an experienced web developer."
  }]
});

const router = useRouter();

</script>

<template>
  <div class="theme-mode sm:py-12">
    <div class="mx-auto flex min-h-[600px] max-w-7xl justify-center sm:px-6 lg:px-8">

    </div>
    <TheSeparator />
    <div class="bg-primary dark:bg-dprimary">
      <section class="m-auto max-w-screen-lg pt-10 sm:pt-14">
        <p
          class="mb-5 ml-8 text-left font-medium uppercase tracking-wider text-white sm:mb-10"
        >
          Latest articles
        </p>
        <ContentNavigation v-slot="{ navigation }">
          <div v-for="link of navigation" :key="link._path">
            <div
              v-if="link.children"
              class="grid grid-cols-1 px-4 sm:grid-cols-2 sm:gap-x-4"
            >
              <div
                v-for="child of link.children"
                :key="child._path"
                class="my-2 w-full cursor-pointer rounded bg-accent text-white dark:bg-daccent"
                @click="router.push(`/articles${child._path}`)"
              >
                <div class="p-4">
                  {{ child.title }}
                </div>
                <div class="bottom-content">
                  <TheSeparator
                    primary-color="fill-secondary"
                    dprimary-color="dark:fill-dsecondary"
                  />
                  <div
                    class="flex flex-row justify-between bg-secondary p-2 dark:bg-dsecondary"
                  >
                    <div class="flex flex-row justify-between">
                    </div>
                    <span class="my-auto text-black dark:text-white">{{
                      child.date
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentNavigation>
      </section>
    </div>
    <div class="h-10 bg-primary dark:bg-dprimary sm:h-40"></div>
  </div>
</template>
