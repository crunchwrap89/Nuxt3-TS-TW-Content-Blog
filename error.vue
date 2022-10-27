<template>
  <div class="h-[100vh] bg-accent text-white">
    <div class="m-auto flex h-full items-center justify-center">
      <div class="flex flex-col p-4 text-center">
        <div class="m-auto flex flex-col">
          <div class="flex justify-center text-5xl">404</div>
          <div class="flex justify-center text-2xl">Page does not exist.</div>
        </div>
        <br />
        <div class="m-auto flex flex-col items-center">
          <h1 class="text-lg font-bold">Oops!</h1>
          <h2>It seems you have landed on a page that does not exist.</h2>
        </div>
        <div class="mx-10 mt-8 w-[80px]">
          <button
            class="rounded border border-green-500 bg-primary p-4"
            @click="handleError"
          >
            Take me back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: { type: Object, default: null },
});

const handleError = () => clearError({ redirect: "/" });
</script>
