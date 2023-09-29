<template>
  <div class="flex h-96 items-center gap-8">
    <Card class="w-[25rem]">
      <template #title>
        <div class="p-5 text-center text-xl font-bold text-gray-600">
          Genshin Impact Drafting App
        </div>
      </template>
      <div class="p-5 pt-0 text-gray-600 drop-shadow-none">
        <form class="flex flex-col gap-2" @submit.prevent="submit">
          <Input v-model="name" placeholder="Enter username" />
          <button class="primary" :disabled="name === ''">
            <template v-if="formSubmitted">
              <img
                src="/assets/Misc/loading.svg"
                class="h-5 animate-spin"
                alt=""
              />
            </template>
            <template v-else> {{ roomId ? "Join" : "Create" }} Room </template>
          </button>
        </form>
      </div>
    </Card>
    <div class="flex flex-col gap-8">
      <Card class="w-[25rem]">
        <template #title>
          <div class="p-5 text-center text-xl font-bold text-gray-600">
            Latest Updates
          </div>
        </template>
        <div class="p-5 pt-0 text-gray-600 drop-shadow-none">
          <h3 class="text-md mb-1 font-semibold">New Characters</h3>
          <div class="mb-8 flex h-56 justify-center gap-4">
            <div
              v-for="(character, index) in Characters.filter((character: Character) => character.isNew)"
              :key="index"
              :class="`flex flex-col items-center rounded-xl border-4 ${getCharacterBorder(
                character
              )}`"
            >
              <img
                :src="`assets/Characters/VS/${character.image}`"
                class="mb-2 h-full"
                alt=""
              />
              <p class="text-md font-semibold">{{ character.name }}</p>
            </div>
          </div>
          <div class="p-5 pt-0 text-gray-600 drop-shadow-none">
            <h3 class="text-md mb-1 font-semibold">Web App</h3>
            <ul class="list-disc pl-8">
              <li>New VS screen</li>
            </ul>
          </div>
        </div>
      </Card>
      <Card class="w-[25rem]">
        <template #title>
          <div class="p-5 text-center text-xl font-bold text-gray-600">
            Upcoming
          </div>
        </template>
        <div class="p-5 pt-0 text-gray-600 drop-shadow-none">
          <h3 class="text-md mb-1 font-semibold">Characters</h3>
          <ul class="list-disc pl-8">
            <li>Wriothesley</li>
          </ul>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Character, Characters } from "@/data";
import Card from "@/components/Card/index.vue";
import Input from "@/components/Input/Input.vue";
import { getCharacterBorder } from "@/mixins/characterBorder";
import socket from "@/socket";

const name = ref<string>("");
const { push } = useRouter();
const { roomId } = useRoute().params;
const formSubmitted = ref<boolean>(false);

onMounted(() => {
  socket.on("getRoomId", (roomId: string) => {
    formSubmitted.value = false;
    push({
      name: "Room",
      params: {
        roomId,
      },
    });
  });
});

onUnmounted(() => {
  socket.off("getRoomId");
});

function createRoom() {
  if (name.value) {
    const form = {
      name: name.value,
    };
    socket.emit("createRoom", form);
  }
}

function joinRoom() {
  const form = {
    name: name.value,
    roomId,
  };
  socket.emit("joinRoom", form);
}

function submit() {
  formSubmitted.value = true;
  if (roomId) {
    joinRoom();
  } else {
    createRoom();
  }
}
</script>
