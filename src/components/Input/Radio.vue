<template>
  <div className="flex items-center m-2">
    <div className="flex items-center h-5">
      <input
        :name="name"
        :id="id"
        type="radio"
        :value="value"
        class="h-4 w-4"
        @change="(e: any) => emit('update:modelValue', e.target.value)"
      />
    </div>
    <div className="ml-2 text-md">
      <label :for="id" class="font-medium">{{ labelName }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
type InputProps = {
  value: string | number;
  labelName: string;
  name: string;
  id: string;
};

type Emits = {
  (e: "update:modelValue", value: string): void;
};

const { value, labelName, name, id } = defineProps<InputProps>();

const emit = defineEmits<Emits>();
</script>
