<script setup lang="ts">
import TheNavbar from "~/components/layout/TheNavbar.vue";

const classes = "no-overscroll";

useHead({
  bodyAttrs: {
    class: classes,
  },
  htmlAttrs: {
    lang: "en",
  },
});

</script>
<template>
  <div class="fixed max-h-[100vh] h-[100vh] w-full bg-secondary dark:bg-dsecondary no-overscroll">
    <TheNavbar class="absolute top-0" />
    <slot />
  </div>
</template>

<style>
.no-overscroll {
  overscroll-behavior: none;
}
</style>
