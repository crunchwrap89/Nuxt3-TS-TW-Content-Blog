<script setup>
import TableOfContents from "~~/components/layout/TableOfContents.vue";

definePageMeta({
  pageTransition: false,
});

const slug = useRoute().params.slug.toString().replace(/,/g, "/");

const { data: article } = await useLazyAsyncData(slug, () => {
  return queryContent(slug).findOne();
});

const toc = computed(() => {
  if (!article.value) return [];
  const items = article.value.excerpt.children;
  if (!items) return [];
  const toc = [];
  const tags = ["h2", "h3", "h4", "h5", "h6"];
  items.forEach((item, idx) => {
    if (tags.includes(item.tag)) {
      toc.push({
        id: item.props.id,
        title: item.props.id.toString().replace(/-/g, " "),
        depth: Number(item.tag.replace(/h/g, "")),
      });
    }
  });
  return toc;
});

useHead({
  title: article.value ? `${article.value.title}` : "article",
});
</script>

<template>
  <main v-if="!article" class="min-h-screen">
    <div class="m-auto flex h-48 w-48 items-center justify-center rounded-md">
      <svg
        aria-hidden="true"
        class="m-auto h-8 w-8 animate-spin rounded-md fill-blue-200 text-black dark:text-gray-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  </main>
  <main v-if="article" class="min-h-screen">
    <TableOfContents
      class="sticky top-[56px] block pt-1 sm:hidden"
      :toc="toc"
    />
    <article class="z-10 flex justify-center sm:pt-14">
      <div class="hidden w-[320px] flex-col p-5 lg:block">
        <div class="sticky top-36">
          <h2 class="mb-4 text-sm font-bold">Articles</h2>
          <ContentNavigation v-slot="{ navigation }">
            <ul class="ml-2 dark:text-white">
              <li v-for="link of navigation" :key="link._path">
                {{ link.title }}
                <ul v-if="link.children" class="mx-4 my-2 list-disc">
                  <li
                    v-for="child of link.children"
                    :key="child._path"
                    class="my-2"
                  >
                    <NuxtLink :to="`/articles${child._path}`">
                      {{ child.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </ContentNavigation>
        </div>
      </div>
      <ClientOnly>
        <ContentRenderer
          class="article-link sm:max-w-900 prose prose-sm prose-slate w-full p-7 dark:text-white lg:prose-base"
          :value="article"
        >
          <template #empty>
            <div class="min-h-full"></div>
          </template>
        </ContentRenderer>
      </ClientOnly>
      <div v-if="article.excerpt" class="hidden w-[260px] p-5 lg:block">
        <div class="sticky top-36">
          <h2 class="mb-4 text-sm font-bold">Table Of Contents</h2>
          <ul class="space-y-2 dark:text-white">
            <template v-for="(t, k) in toc" :key="`toc-item-${k}`">
              <li class="ml-4">
                <NuxtLink
                  :class="{
                    'text-sm': t.depth == 2,
                    'text-[13px]': t.depth > 2,
                  }"
                  class="capitalize"
                  :to="`#${t.id}`"
                  >{{ t.title }}</NuxtLink
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>
<style scoped>
.article-link {
  @apply before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''] prose-a:text-primary;
}
</style>
