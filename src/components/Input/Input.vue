<template>
  <input
    type="text"
    class="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-gray-300 focus:outline-none"
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
