<script setup lang="ts">
import TheNavbar from "~/components/layout/TheNavbar.vue";
import TheFooter from "~~/components/layout/TheFooter.vue";

useHead({
  htmlAttrs: {
    lang: "en",
  }
});
</script>

<template>
  <div class="relative w-full bg-secondary dark:bg-dsecondary">
    <TheNavbar />
    <slot />
    <TheFooter />
  </div>
</template>
