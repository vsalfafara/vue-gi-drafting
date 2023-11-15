<template>
  <fieldset class="flex flex-wrap gap-2">
    <div v-for="option in options">
      <input
        :type="type"
        :name="name"
        :value="option"
        :id="`${name}-${option.id}`"
        class="peer hidden"
        v-model="modelValue"
      />
      <label
        :for="`${name}-${option.id}`"
        class="flex min-w-[4rem] cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700"
      >
        <p class="text-sm font-medium">{{ option.name }}</p>
      </label>
    </div>
    <button v-if="type === 'radio'" class="danger" @click="modelValue = ''">
      Reset
    </button>
  </fieldset>
</template>

<script setup lang="ts">
import InputPropTypes from "./types";
const {
  type = "radio",
  options = [],
  name = "name",
} = defineProps<InputPropTypes>();
const modelValue = defineModel<any[] | string>();
</script>
