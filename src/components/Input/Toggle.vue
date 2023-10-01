<template>
  <label class="relative mb-5 cursor-pointer">
    <input type="checkbox" :value="value" class="peer sr-only" />
    <div
      class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"
    ></div>
  </label>
</template>

<script setup lang="ts">
type InputProps = {
  value: string | number;
};

type Emits = {
  (e: "update:modelValue", value: string): void;
};

const { value } = defineProps<InputProps>();

const emit = defineEmits<Emits>();
</script>
