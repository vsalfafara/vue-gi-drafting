<template>
  <div className="flex items-center">
    <input
      :name="name"
      :id="id"
      type="radio"
      :value="value"
      @change="(e: any) => emit('update:modelValue', e.target.value)"
      class="peer hidden"
      :disabled="disabled"
      :checked="checked"
    />

    <label
      :for="id"
      class="flex min-w-[4rem] cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700"
    >
      <p class="text-sm font-medium">{{ labelName }}</p>
    </label>
  </div>
</template>

<script setup lang="ts">
type InputProps = {
  value: string | number;
  labelName: string;
  name: string;
  id: string;
  disabled?: boolean;
  checked?: boolean;
};

type Emits = {
  (e: "update:modelValue", value: string): void;
};

const { value, labelName, name, id, disabled, checked } =
  defineProps<InputProps>();

const emit = defineEmits<Emits>();
</script>
