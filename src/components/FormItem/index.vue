<template>
  <div class="my-4 flex items-center">
    <label v-if="label" class="w-[12rem] pr-4 text-left">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type FormItemProps = {
  label?: string;
};

const { label } = defineProps<FormItemProps>();
</script>
