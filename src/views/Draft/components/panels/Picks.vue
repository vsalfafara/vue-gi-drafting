<template>
  <div
    :class="`${getPanelSize()} overflow-hidden bg-gray-800 bg-opacity-70 outline outline-2 outline-green-500`"
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

const { character, gameType, mode } = withDefaults(defineProps<PanelProps>(), {
  character: null,
  gameType: "",
  mode: "",
});

function getPanelSize() {
  if (gameType !== "abyss" && mode !== "4v4") {
    if (mode === "1v1") return "h-52 w-full";
    else if (mode === "2v2") return "h-36 w-1/2 min-w-[200px]";
    else if (mode === "3v3") return "h-24 w-48";
  } else return "min-w-[12rem] h-28 w-1/2";
}
</script>
