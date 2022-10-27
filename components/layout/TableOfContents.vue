<script setup lang="ts">
const tocIsOpen = ref(false);

const props = defineProps<{ toc: any[] }>();

function removeListeners() {
  window.removeEventListener("click", clickOutsideToC);
}

function addListeners() {
  window.addEventListener("click", clickOutsideToC);
}

function clickOutsideToC(e: any) {
  if (!tocIsOpen.value) return;
  const classes = e.target.getAttribute("class");

  if (classes == null || classes == undefined) {
    return (tocIsOpen.value = false);
  }
  if (!classes.includes("table-of-content")) {
    return (tocIsOpen.value = false);
  }
}

onMounted(() => {
  addListeners();
});

onUnmounted(() => {
  removeListeners();
});
</script>

<template>
  <div
    class="h-auto w-full bg-gray-700 text-white dark:bg-dprimary dark:text-white"
  >
    <div
      class="table-of-content h-auto w-full p-4 pl-6"
      @click="tocIsOpen = !tocIsOpen"
    >
      Table of Contents ->
    </div>
    <div v-if="tocIsOpen" class="h-auto w-full px-4 pb-4">
      <ul class="space-y-2 dark:text-white">
        <template v-for="(t, i) in props.toc" :key="`toc-item-${i}`">
          <li>
            <NuxtLink
              :class="{
                'ml-4 text-sm': t.depth == 2,
                'ml-6 text-[13px]': t.depth > 2,
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
</template>
