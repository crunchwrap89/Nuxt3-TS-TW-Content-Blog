<script setup lang="ts">
const props = defineProps({
  primaryColor: {
    type: String,
    default: "fill-primary",
    required: false,
  },
  dprimaryColor: {
    type: String,
    default: "dark:fill-dprimary",
    required: false,
  },
});

const primaryColor = computed(() => props.primaryColor);
const dprimaryColor = computed(() => props.dprimaryColor);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1921.281 145.82"
    :class="[primaryColor, dprimaryColor]"
  >
    <path
      d="M4221-1918.177s334.258-105.245,817.4-13.84,1103.883-108.889,1103.883-108.889v145.82H4221Z"
      transform="translate(-4221 2040.906)"
    ></path>
  </svg>
</template>
