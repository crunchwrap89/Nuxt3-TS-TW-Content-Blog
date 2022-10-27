<script setup lang="ts">
import MobileMenu from "./MobileMenu.vue";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};

const { data: articleNav } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("article"));
});

const mobileMenuVisible = ref(false);
const latestArticle = ref("");

function getLatestArticleForLink() {
  latestArticle.value = articleNav.value[0].children[0]._path;
}

function removeListeners() {
  window.removeEventListener("click", clickOutside);
}

function addListeners() {
  window.addEventListener("click", clickOutside);
}

function clickOutside(e: any) {
  if (!mobileMenuVisible.value) return;
  const classes = e.target.getAttribute("class");

  if (classes == null || classes == undefined) {
    return (mobileMenuVisible.value = false);
  }
  if (!classes.includes("mobile-menu")) {
    return (mobileMenuVisible.value = false);
  }
}

onMounted(() => {
  getLatestArticleForLink();
  addListeners();
});

onUnmounted(() => {
  removeListeners();
});
</script>

<template>
  <header
    class="sticky top-0 z-50 h-16 w-full border-t-8 border-primary backdrop-blur-md dark:border-dprimary"
    :class="mobileMenuVisible && 'bg-secondary dark:bg-dsecondary'"
  >
    <div
      class="flex h-full items-center justify-between px-4 sm:mx-auto sm:max-w-7xl sm:px-3 lg:px-6"
    >
      <div class="mobile-menu -my-2 -mr-2 md:hidden">
        <button
          type="button"
          class="mobile-menu inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-500 focus:outline-none dark:text-white"
          aria-expanded="false"
          @click="mobileMenuVisible = !mobileMenuVisible"
        >
          <span class="mobile-menu sr-only">Open menu</span>
          <svg
            class="mobile-menu h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              class="mobile-menu"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <NuxtLink to="/" class="flex items-center">
        <span
          class="text-xl tracking-wider text-primary hover:text-gray-900 dark:text-dprimary sm:ml-2 sm:mr-20 drop-shadow-lg shadow-black"
          >marcusn.dev</span
        >
      </NuxtLink>
      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <nav
          class="align-center mr-20 hidden space-x-10 text-base font-medium text-gray-700 dark:text-white md:flex"
        >
          <NuxtLink to="/">
            <span class="hover:text-gray-400">Home</span>
          </NuxtLink>
          <NuxtLink :to="`/articles${latestArticle}`">
            <span class="hover:text-gray-400">Articles</span>
          </NuxtLink>
        </nav>
      </div>
      <client-only>
        <button
          class="block"
          aria-label="set-theme-color"
          @click="
            setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
          "
        >
          <svg
            v-if="$colorMode.value == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-50"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          <svg
            v-if="$colorMode.value == 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </client-only>
    </div>
    <transition name="slide-fade">
      <MobileMenu
        v-if="mobileMenuVisible"
        :latest-article-path="latestArticle"
      />
    </transition>
  </header>
</template>
