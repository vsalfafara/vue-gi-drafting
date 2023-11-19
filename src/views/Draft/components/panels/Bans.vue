<template>
  <div
    class="relative h-16 w-28 overflow-hidden bg-gray-800 bg-opacity-70 outline outline-2 outline-red-500"
  >
    <template v-if="character">
      <img
        :src="`/assets/Characters/Panel/${character?.image}`"
        alt=""
        class="h-full w-full object-cover object-center"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Character } from "@/data";

type PanelProps = {
  character: Character | null;
};

const { character } = withDefaults(defineProps<PanelProps>(), {
  character: null,
});
</script>
