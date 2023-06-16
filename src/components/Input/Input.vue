<template>
  <input
    type="text"
    class="w-full rounded-md border border-gray-300 p-2 focus:outline-none"
    :value="modelValue"
    :placeholder="placeholder"
    @input="(e: any) => emit('update:modelValue', e.target.value)"
  />
</template>

<script setup lang="ts">
type InputProps = {
  modelValue: string;
  placeholder?: string;
};

type Emits = {
  (e: "update:modelValue", value: string): void;
};

const { modelValue, placeholder } = defineProps<InputProps>();
const emit = defineEmits<Emits>();
</script>
