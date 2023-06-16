<template>
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
          {{ roomId ? "Join" : "Create" }} Room
        </button>
      </form>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Card from "@/components/Card/index.vue";
import Input from "@/components/Input/Input.vue";
import socket from "@/socket";

const name = ref<string>("");
const { push } = useRouter();
const { roomId } = useRoute().params;

onMounted(() => {
  socket.on("getRoomId", (roomId: string) => {
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
  if (roomId) {
    joinRoom();
  } else {
    createRoom();
  }
}
</script>
