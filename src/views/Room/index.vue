<template>
  <div>
    <Card v-if="user.isHost" class="w-[40rem]">
      <template #title>
        <div class="p-5 text-xl font-bold text-gray-600">Draft Settings</div>
      </template>
      <div class="p-5 pt-0 text-gray-600 drop-shadow-none">
        <FormItem label="Draft Type">
          <div class="flex w-full flex-wrap gap-2">
            <Radio
              name="type"
              id="std"
              labelName="Standard"
              value="std"
              v-model="type"
            />
            <Radio
              name="type"
              id="abyss"
              labelName="Abyss"
              value="abyss"
              v-model="type"
            />
          </div>
        </FormItem>
        <FormItem v-if="type === 'std'" label="Mode">
          <div class="flex w-full flex-wrap gap-2">
            <Radio
              name="mode"
              id="1v1"
              labelName="1v1"
              value="1v1"
              v-model="mode"
            />
            <Radio
              name="mode"
              id="2v2"
              labelName="2v2"
              value="2v2"
              v-model="mode"
            />
            <Radio
              name="mode"
              id="3v3"
              labelName="3v3"
              value="3v3"
              v-model="mode"
            />
            <Radio
              name="mode"
              id="4v4"
              labelName="4v4"
              value="4v4"
              v-model="mode"
            />
          </div>
        </FormItem>
        <FormItem label="Auto Bans">
          <multiselect
            :close-on-select="false"
            multiple
            searchable
            v-model="autoban"
            label="label"
            track-by="value"
            :options="AutobanOptions"
          ></multiselect>
        </FormItem>
        <FormItem label="With Time">
          <div class="flex w-full flex-wrap gap-2">
            <Radio
              name="with-time"
              id="Yes"
              labelName="Yes"
              value="Yes"
              v-model="withTimer"
            />
            <Radio
              name="with-time"
              id="No"
              labelName="No"
              value="No"
              v-model="withTimer"
            />
          </div>
        </FormItem>
        <FormItem v-if="withTimer === 'Yes'" label="Time (Seconds)">
          <div class="flex w-full flex-wrap gap-2">
            <Radio
              name="time"
              id="15"
              labelName="15"
              value="15"
              v-model="time"
            />
            <Radio
              name="time"
              id="30"
              labelName="30"
              value="30"
              v-model="time"
            />
            <Radio
              name="time"
              id="45"
              labelName="45"
              value="45"
              v-model="time"
            />
            <Radio
              name="time"
              id="60"
              labelName="60"
              value="60"
              v-model="time"
            />
          </div>
        </FormItem>
        <FormItem label="Audience">
          <div class="flex w-full flex-wrap gap-2">
            <Checkbox
              v-for="user in audience"
              name="audience"
              :key="user.id"
              :id="user.id"
              :labelName="user.name"
              :value="user"
              v-model="players"
            ></Checkbox>
          </div>
        </FormItem>
        <FormItem label="First Pick">
          <div class="flex w-full flex-wrap gap-2">
            <Radio
              v-for="(player, index) in players"
              :key="player.id"
              name="first-pick"
              :id="index.toString()"
              :labelName="player.name"
              :value="index"
              v-model="firstPick"
            />
          </div>
        </FormItem>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2 p-5 pt-0">
          <button class="text" @click="showHelpHost = true">Help</button>
          <button class="light" @click="copyLink">Copy Invitation Link</button>
          <button class="primary" @click="submit" :disabled="isDisabled">
            Start Draft
          </button>
        </div>
      </template>
    </Card>
    <Card v-else>
      <div class="p-5 font-semibold text-gray-600 drop-shadow-none">
        Waiting for host to start
      </div>
      <template #footer>
        <div class="flex gap-2 p-5 pt-0">
          <button class="primary w-full" @click="showHelp = true">Help</button>
        </div>
      </template>
    </Card>
    <Modal :is-open="showHelpHost" @close="showHelpHost = false">
      <template #title>How to play</template>
      <div class="mt-2">
        <h3 class="text-md mb-1 font-semibold">Game Type</h3>
        <p class="mb-4 text-sm text-gray-700">
          Standard is a team versus team setup with a maximum of 4 characters
          per team. Abyss Floor 12 is an 8 versus 8 team setup
        </p>
        <h3 class="text-md mb-1 font-semibold">Mode</h3>
        <p class="mb-4 text-sm text-gray-700">
          <span class="font-semibold">(Standard only)</span> Choose 1 of
          specific team sizes
        </p>
        <h3 class="text-md mb-1 font-semibold">Auto Bans</h3>
        <p class="mb-4 text-sm text-gray-700">
          Select from a number of categories pertaining to a certain group of
          characters
          <span class="font-semibold"
            >(Anemo characters, adult characters, etc)</span
          >. If this is set, the characters that are related to one of the set
          auto bans will not be visible from the character table, giving the
          players a tighter selection of characters
        </p>
        <h3 class="text-md mb-1 font-semibold">With Timer</h3>
        <p class="mb-4 text-sm text-gray-700">
          Choose whether or not to include a timer
        </p>
        <h3 class="text-md mb-1 font-semibold">Timer (Seconds)</h3>
        <p class="mb-4 text-sm text-gray-700">
          <span class="font-semibold">(With Timer only)</span> Choose 1 between
          choices of time (15 seconds, 30 seconds, 45 seconds, 60 seconds).
        </p>
        <h3 class="text-md mb-1 font-semibold">Audience</h3>
        <p class="mb-4 text-sm text-gray-700">
          A list of people who have entered your room. Here, you can choose the
          players to participate in the drafting (exactly 2 players only)
        </p>
        <h3 class="text-md mb-1 font-semibold">First Pick</h3>
        <p class="mb-4 text-sm text-gray-700">
          Choose which player to go first
          <span class="font-semibold"
            >(options will be visible once you select them from the Audience
            field)</span
          >
        </p>
        <h3 class="text-md mb-1 font-bold text-red-600">WARNING</h3>
        <p class="mb-4 text-sm text-gray-700">
          Please advice everyone in the room to not refresh the room once you
          start the game. Refreshing the page in the game page will cause bugs
          for the user.
        </p>
        <p class="mb-4 text-sm text-gray-700">
          If one of the players are having difficulty due to issues on their
          end, you can click the
          <span class="font-semibold">Go Back to Room</span> button. The app
          will move all users including the host, players, and audience to the
          previous page. And from here, you can restart the game.
        </p>
      </div>
      <template #footer>
        <button class="success" @click="showHelpHost = false">Got it!</button>
      </template>
    </Modal>
    <Modal :is-open="showHelp" @close="showHelp = false">
      <template #title>How to play</template>
      <div class="mt-2">
        <p class="mb-4 text-sm text-gray-700">
          This is the waiting room for the audience and players. Please wait for
          the host to start the drafting.
        </p>

        <h3 class="text-md mb-1 font-bold text-red-600">WARNING</h3>
        <p class="mb-4 text-sm text-gray-700">
          Once the host starts the drafting, you will be moved to the drafting
          page.
          <span class="font-semibold">Do not reload/refresh this page</span> as
          this will cause bugs on your end.
        </p>
        <p class="mb-4 text-sm text-gray-700">
          You can communicate through chat by clicking the
          <span class="font-semibold">Chat</span> button on the top left if you
          are having issues on the drafting.
        </p>
      </div>
      <template #footer>
        <button class="success" @click="showHelp = false">Got it!</button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import FormItem from "@/components/FormItem/index.vue";
import Radio from "@/components/Input/Radio.vue";
import Checkbox from "@/components/Input/Checkbox.vue";
import Card from "@/components/Card/index.vue";
import Modal from "@/components/Modal/index.vue";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import { AutobanOptions, Autoban, resetCharacters } from "@/data";
import { User } from "@/types/storage";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { ssGetUser, ssSetAutoban, ssSetSelection } from "@/storage";
import socket from "@/socket";

const { push } = useRouter();
const { roomId } = useRoute().params;
const user = ssGetUser();
const type = ref<string>("");
const mode = ref<string | null>(null);
const autoban = ref<Autoban[]>([]);
const withTimer = ref<string>("No");
const time = ref<number | null>(null);
const audience = ref<User[]>([]);
const players = ref<User[]>([]);
const firstPick = ref<number | null>(null);
const showHelpHost = ref<boolean>(false);
const showHelp = ref<boolean>(false);

const isDisabled = computed(() => {
  return (
    players.value.length !== 2 ||
    !(
      firstPick.value !== null &&
      (type.value !== "std" || mode.value?.length) &&
      (withTimer.value !== "Yes" || time.value)
    )
  );
});

function copyLink() {
  navigator.clipboard.writeText(`${window.location.host}/${roomId}`);
  toast("Invitation Link Copied", {
    type: "success",
    autoClose: 3000,
  });
}

function submit() {
  const form = {
    gameType: type.value,
    mode: mode.value,
    players: players.value,
    withTimer: withTimer.value,
    time: Number(time.value),
    firstPick: Number(firstPick.value),
    roomId,
    autoban: autoban.value,
  };
  socket.emit("startGame", form);
}

watch(type, () => {
  mode.value = null;
});

watch(withTimer, () => {
  if (withTimer.value === "Yes") {
    time.value = null;
  }
});

watch(players, () => {
  firstPick.value = null;
});

onMounted(() => {
  socket.emit("rejoinRoom", user);
  if (user.isHost) {
    socket.emit("getAllPlayersInRoom", user.roomId);
  }

  socket.on("getAllPlayersInRoom", (users: User[]) => {
    audience.value = users;
  });

  socket.on(
    "startGame",
    ({ autoban, gameType, mode, withTimer, game, noOfPicks, noOfBans }) => {
      resetCharacters();
      const selectionArr = game.players.map((player: User) => {
        return {
          player: player,
          selection: {
            picks: {
              characters: Array(Number(noOfPicks)),
              pointer: 0,
            },
            bans: {
              characters: Array(Number(noOfBans)),
              pointer: 0,
            },
          },
        };
      });
      ssSetSelection(selectionArr);
      ssSetAutoban(autoban);

      push({
        name: "Draft",
        query: {
          gameType,
          withTimer,
          mode,
        },
      });
    }
  );
});

onUnmounted(() => {
  socket.off("getAllPlayersInRoom");
  socket.off("startGame");
});
</script>

<style scoped></style>
