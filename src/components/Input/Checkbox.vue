<template>
  <div className="flex items-center">
    <div className="flex items-center h-5">
      <input
        type="checkbox"
        class="h-4 w-4"
        v-model="model"
        :id="id"
        :name="name"
        :value="value"
        :checked="!!value"
      />
    </div>
    <div v-if="labelName" className="ml-2 text-md">
      <label :for="id" class="font-medium">{{ labelName }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type InputProps = {
  modelValue: Array<any> | Boolean;
  value: Boolean | Object;
  labelName: string;
  id: string;
  name: string;
};

const props = defineProps<InputProps>();
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
