<template>
  <button :class="variant" :disabled="disabled">
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
type Props = {
  variant?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "info-light"
    | "success-light"
    | "warning-light"
    | "danger-light"
    | "text";
  disabled?: boolean;
};

const { variant = "primary", disabled = false } = defineProps<Props>();
</script>

<style></style>
