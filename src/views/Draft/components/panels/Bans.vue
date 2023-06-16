<template>
  <div
    class="relative overflow-hidden border-4 border-red-500 bg-gray-800 bg-opacity-70 sm:h-16 sm:w-20 md:h-16 md:w-24 lg:h-20 lg:w-32"
  >
    <template v-if="character">
      <img
        :src="`assets/Characters/Panel/${character?.image}`"
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
