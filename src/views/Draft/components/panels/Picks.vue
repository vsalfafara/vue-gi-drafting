<template>
  <div
    :class="`${
      gameType === 'std' && mode !== '4v4' ? 'h-32 w-full' : 'h-28 w-1/2'
    } overflow-hidden border-4 border-green-500 bg-gray-800 bg-opacity-70 last:mr-0`"
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
  gameType: string | string[];
  mode: string | string[];
};

const { character, gameType } = withDefaults(defineProps<PanelProps>(), {
  character: null,
  gameType: "",
  mode: "",
});
</script>
