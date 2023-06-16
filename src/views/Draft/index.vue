<template>
  <div>
    <div
      v-if="showVSScreen"
      class="relative flex h-[700px] w-[900px] flex-col items-center justify-start gap-2 text-white"
    >
      <template v-if="user.isHost">
        <div class="absolute right-2 top-0 z-10">
          <button class="warning" @click="goBack">Go back to Room</button>
        </div>
      </template>

      <TransitionRoot
        :show="showPlayerPanel1"
        enter="transition duration-700"
        enterFrom="opacity-0 translate-x-24"
        enterTo="opacity-100 translate-x-0"
      >
        <h1 className="text-4xl text-center">
          {{ selection[0]?.player.name }}
        </h1>
        <div class="my-2 flex">
          <div
            v-for="(character, index) in selection[0].selection.picks
              .characters"
            :key="index"
          >
            <template v-if="character.name !== 'No Pick'">
              <div
                :class="`mx-2 h-64 w-44 overflow-hidden rounded-xl border-4 bg-gray-800 bg-opacity-70 ${getCharacterBorder(
                  character
                )}`"
              >
                <img
                  :src="`assets/Characters/VS/${character?.image}`"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </template>
          </div>
        </div>
      </TransitionRoot>
      <TransitionRoot
        :show="showVS"
        enter="transition duration-300"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
      >
        <h1 className="text-6xl italic text-center">VS</h1>
      </TransitionRoot>

      <TransitionRoot
        :show="showPlayerPanel2"
        enter="transition duration-700"
        enterFrom="opacity-0 -translate-x-24"
        enterTo="opacity-100 translate-x-0"
      >
        <div class="my-2 flex">
          <div
            v-for="(character, index) in selection[1].selection.picks
              .characters"
            :key="index"
          >
            <template v-if="character.name !== 'No Pick'">
              <div
                :class="`mx-2 h-64 w-44 overflow-hidden rounded-xl border-4 bg-gray-800 bg-opacity-70 ${getCharacterBorder(
                  character
                )}`"
              >
                <img
                  :src="`assets/Characters/VS/${character?.image}`"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </template>
          </div>
        </div>
        <h1 className="text-4xl text-center">
          {{ selection[1]?.player.name }}
        </h1>
      </TransitionRoot>
    </div>
    <TransitionRoot
      appear
      :show="!hideDraft"
      leave="transition duration-500"
      leaveFrom="opacity-100 translate-y-8"
      leaveTo="opacity-0 translate-y-16"
    >
      <div class="flex flex-col">
        <div class="relative flex h-16 justify-center">
          <div
            v-if="withTimer"
            className="flex w-36 justify-center items-center text-white bg-gray-800 bg-opacity-70 border-4 border-yellow-600 "
          >
            <span className="text-6xl font-bold pb-[.5rem]">{{ time }}</span>
          </div>
          <div
            class="absolute right-0 top-0 mb-2 flex h-full items-center justify-end gap-2"
          >
            <template v-if="user.isHost">
              <button class="primary" @click.once="start" :disabled="gameStart">
                Start
              </button>
              <button class="warning" @click="goBack">Go Back to Room</button>
            </template>
            <button class="success relative" @click="handleShowChat">
              <span
                v-if="newMessage"
                class="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-red-500"
              />Chat
            </button>
            <button class="info" @click="showHelp = true">Help</button>
          </div>
        </div>
        <div class="flex min-h-[650px]">
          <div class="flex flex-col justify-center sm:w-48 md:w-72 lg:w-96">
            <div class="bg-green-500 text-center text-2xl font-bold text-white">
              <p>
                {{ selection[0]?.player.name }}
                {{ selection[0]?.player.id === user.id ? "(You)" : "" }}
              </p>
            </div>
            <div class="flex flex-wrap">
              <Picks
                v-for="character in selection[0].selection.picks.characters"
                :key="character?.name"
                :character="character"
                :gameType="gameType"
                :mode="mode"
              />
            </div>
            <div class="flex flex-wrap">
              <Bans
                v-for="character in selection[0].selection.bans.characters"
                :key="character?.name"
                :character="character"
              />
            </div>
          </div>
          <div class="flex w-[750px] flex-col items-center justify-center">
            <TransitionRoot
              appear
              :show="draftStart"
              enter="transition duration-300"
              enterFrom="opacity-0 -translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-300"
              leaveFrom="opacity-100 translate-y-8"
              leaveTo="opacity-0 translate-y-16"
              class="flex h-full items-center justify-center"
            >
              <h1 class="text-6xl font-bold text-white">Draft Starting!</h1>
            </TransitionRoot>
            <TransitionRoot
              :show="showSplash"
              enter="transition ease-out duration-500"
              enterFrom="opacity-0 -translate-y-28"
              enterTo="opacity-100 translate-y-0"
              leave="transition-opacity ease-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <!-- <div class="h-[650px] w-full items-center justify-center"> -->
              <img
                :src="`assets/Characters/Splash/${splash?.image}`"
                class="h-auto max-h-[650px] w-auto"
                alt=""
              />
              <!-- </div> -->
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showTurn"
              enter="transition duration-300"
              enterFrom="opacity-0 -translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-300"
              leaveFrom="opacity-100 translate-y-8"
              leaveTo="opacity-0 translate-y-16"
            >
              <div
                :class="`rounded-lg bg-opacity-40 p-3 ${
                  turn?.selection ? 'bg-green-500' : 'bg-red-500'
                }`"
              >
                <h1 class="text-3xl font-bold italic text-white">
                  {{
                    turn?.player.id === user.id
                      ? "Your"
                      : `${turn?.player.name}'s`
                  }}
                  turn to {{ turn?.selection ? "pick" : "ban" }}
                </h1>
              </div>
            </TransitionRoot>
            <template v-if="!user.isHost">
              <TransitionRoot
                :show="showPanel"
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  class="scrollbar-thumb-rounded-full h-[450px] overflow-y-scroll rounded-md border-4 border-yellow-600 bg-gray-800 p-4 scrollbar-thin scrollbar-thumb-gray-400"
                >
                  <div>
                    <Input
                      v-model="filter"
                      @input="handleFilter"
                      placeholder="Search Character"
                    />
                  </div>
                  <div class="flex justify-center">
                    <div
                      v-for="(element, index) in Object.keys(elements)"
                      :key="index"
                      class="inline-flex w-full flex-col"
                    >
                      <div class="m-2 h-auto">
                        <img
                          :src="`assets/Elements/${elements[element].name}.webp`"
                          class="h-auto w-full"
                        />
                      </div>
                      <div
                        v-for="(panel, innerIndex) in panels[element]"
                        :key="innerIndex"
                        class="m-2 h-auto cursor-pointer"
                      >
                        <img
                          :src="`assets/Characters/Thumbnail/${panel?.image}`"
                          class="h-auto w-auto"
                          @click="selectCharacter(panel)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TransitionRoot>
            </template>
          </div>
          <div class="flex flex-col justify-center sm:w-48 md:w-72 lg:w-96">
            <div class="bg-green-500 text-center text-2xl font-bold text-white">
              <p>
                {{ selection[1]?.player.name }}
                {{ selection[1]?.player.id === user.id ? "(You)" : "" }}
              </p>
            </div>
            <div class="flex flex-wrap">
              <Picks
                v-for="character in selection[1].selection.picks.characters"
                :key="character?.name"
                :character="character"
                :gameType="gameType"
                :mode="mode"
              />
            </div>
            <div class="flex flex-row-reverse flex-wrap">
              <Bans
                v-for="character in selection[1].selection.bans.characters"
                :key="character?.name"
                :character="character"
              />
            </div>
          </div>
        </div>
      </div>
    </TransitionRoot>
    <Modal
      :is-open="selectedCharacterDialog"
      @close="selectedCharacterDialog = false"
    >
      <template #title>{{
        `${selectionType ? "Pick" : "Ban"} ${selectedCharacter?.name}?`
      }}</template>
      <div class="text-sm text-gray-500">
        Do you want to {{ selectionType ? "pick" : "ban" }}
        {{ selectedCharacter?.name }}?
      </div>
      <template #footer>
        <button class="danger" @click.once="selectedCharacterDialog = false">
          Uhh wait...
        </button>
        <button
          class="success"
          @click.once="chooseCharacter(selectionType ? 2 : 1)"
        >
          Yes, {{ selectionType ? "pick!" : "ban!" }}
        </button>
      </template>
    </Modal>
    <Modal :is-open="showChat" @close="showChat = false">
      <template #title>Chat</template>
      <div class="mb-4 h-96 overflow-x-scroll border-2 border-gray-300 px-1">
        <div
          v-for="(chat, index) in chatList"
          :key="index"
          :class="`m-2 bg-purple-100 px-4 py-2 ${
            chat.user.id === user.id ? 'text-right' : 'text-left'
          }`"
        >
          <p class="mb-2 text-sm text-purple-900">
            <span
              :class="`${
                chat.user.id === user.id ? 'flex flex-row-reverse' : ''
              }`"
            >
              <span
                v-if="chat.user.isHost"
                :class="`${chat.user.id === user.id ? 'ml-2' : 'mr-2'}`"
                >&#128081;</span
              >
              <span>{{ chat.user.name }}</span>
            </span>
          </p>
          <p class="text-sm">{{ chat.message }}</p>
        </div>
      </div>
      <template #footer>
        <div class="flex w-full items-center gap-2">
          <Input v-model="message" placeholder="Type your message..." />
          <button class="primary" @click="sendChat">Send</button>
        </div>
      </template>
    </Modal>
    <Modal :is-open="showHelp" @close="showHelp = false">
      <template #title>How to play</template>
      <div class="mt-2">
        <h3 className="text-md font-semibold mb-1">Game Type</h3>
        <p className="text-sm text-gray-700 mb-4">
          Standard is a team versus team setup with a maximum of 4 characters
          per team. Abyss Floor 12 is an 8 versus 8 team setup
        </p>
        <h3 className="text-md font-semibold mb-1">Mode</h3>
        <p className="text-sm text-gray-700 mb-4">
          <span className="font-semibold">(Standard only)</span> Choose 1 of
          specific team sizes
        </p>
        <h3 className="text-md font-semibold mb-1">Auto Bans</h3>
        <p className="text-sm text-gray-700 mb-4">
          Select from a number of categories pertaining to a certain group of
          characters
          <span className="font-semibold"
            >(Anemo characters, adult characters, etc)</span
          >. If this is set, the characters that are related to one of the set
          auto bans will not be visible from the character table, giving the
          players a tighter selection of characters
        </p>
        <h3 className="text-md font-semibold mb-1">With Timer</h3>
        <p className="text-sm text-gray-700 mb-4">
          Choose whether or not to include a timer
        </p>
        <h3 className="text-md font-semibold mb-1">Timer (Seconds)</h3>
        <p className="text-sm text-gray-700 mb-4">
          <span className="font-semibold">(With Timer only)</span> Choose 1
          between choices of time (15 seconds, 30 seconds, 45 seconds, 60
          seconds).
        </p>
        <h3 className="text-md font-semibold mb-1">Audience</h3>
        <p className="text-sm text-gray-700 mb-4">
          A list of people who have entered your room. Here, you can choose the
          players to participate in the drafting (exactly 2 players only)
        </p>
        <h3 className="text-md font-semibold mb-1">First Pick</h3>
        <p className="text-sm text-gray-700 mb-4">
          Choose which player to go first
          <span className="font-semibold"
            >(options will be visible once you select them from the Audience
            field)</span
          >
        </p>
        <h3 className="text-md text-red-600 font-bold mb-1">WARNING</h3>
        <p className="text-sm text-gray-700 mb-4">
          Please advice everyone in the room to not refresh the room once you
          start the game. Refreshing the page in the game page will cause bugs
          for the user.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          If one of the players are having difficulty due to issues on their
          end, you can click the
          <span className="font-semibold">Go Back to Room</span> button. The app
          will move all users including the host, players, and audience to the
          previous page. And from here, you can restart the game.
        </p>
      </div>
      <template #footer>
        <button class="success" @click="showHelp = false">Got it!</button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import {
  Autoban,
  Character,
  Characters,
  getPanels,
  removeCharacter,
  Elements,
  Panel,
  characterExists,
  NoPick,
  filterCharacters,
} from "@/data";
import socket from "@/socket";
import { TransitionRoot } from "@headlessui/vue";
import Input from "@/components/Input/Input.vue";
import Modal from "@/components/Modal/index.vue";
import { ssGetAutoban, ssGetSelection, ssGetUser } from "@/storage";
import { User } from "@/types/storage";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Picks from "./components/panels/Picks.vue";
import Bans from "./components/panels/Bans.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

type Turn = {
  player: User;
  selection: number;
  turn: number;
};

type Chat = {
  user: User;
  message: string;
};

type Selection = {
  bans: {
    characters: Character[];
    pointer: number;
  };
  picks: {
    characters: Character[];
    pointer: number;
  };
};

type Selections = {
  player: User;
  selection: Selection;
};

const gameType = useRoute().query.gameType?.toString();
const withTimer = useRoute().query.withTimer?.toString();
const mode = useRoute().query.mode?.toString();
const { push } = useRouter();

const user = ssGetUser();
const autoban = ssGetAutoban();
const panels = ref<Panel>({});
const showPanel = ref<boolean>(false);
const filter = ref<string>("");
const elements = ref<any>(Elements);
const selection = ref<Selections[]>(ssGetSelection());
const draftStart = ref<boolean>(false);
const gameStart = ref<boolean>(false);
const selectionType = ref<number>(-1);
const selectType = ref<number>(0);
const selectedCharacter = ref<Character>(NoPick);
const selectedCharacterDialog = ref<boolean>(false);
const splash = ref<Character>();
const showSplash = ref<boolean>(false);
const turn = ref<Turn>();
const showTurn = ref<boolean>(false);
const showHelp = ref<boolean>(false);
const showChat = ref<boolean>(false);
const chatList = ref<Chat[]>([]);
const message = ref<string>("");
const newMessage = ref<boolean>(false);
const time = ref<number>(0);
const hideDraft = ref<boolean>(false);
const showVSScreen = ref<boolean>(false);
const showPlayerPanel1 = ref<boolean>(false);
const showPlayerPanel2 = ref<boolean>(false);
const showVS = ref<boolean>(false);

onMounted(() => {
  if (autoban) {
    const bans = JSON.parse(autoban).map((ban: Autoban) =>
      ban.value.toLowerCase()
    );
    const autobannedCharacters = Characters.filter((character: Character) => {
      return (
        bans.includes(character.sex?.toLowerCase()) ||
        bans.includes(character.rarity?.toLowerCase()) ||
        bans.includes(character.bodyType?.toLowerCase()) ||
        bans.includes(character.weapon?.toLowerCase()) ||
        bans.includes(character.region?.toLowerCase()) ||
        bans.includes(character.vision?.toLowerCase())
      );
    });
    autobannedCharacters.forEach((character: Character) =>
      removeCharacter(character.name)
    );
    panels.value = getPanels();
  }

  socket.on("draftStart", () => {
    draftStart.value = true;
    const draftStartInterval = setTimeout(() => {
      draftStart.value = false;
      if (user.isHost) {
        nextTurn();
      }
      clearTimeout(draftStartInterval);
    }, 3000);
  });

  socket.on("select", (selection: number) => {
    selectionType.value = selection;
    selectType.value = 0;
  });

  socket.on("announceTurn", (turnData: Turn) => {
    turn.value = turnData;
    const showTurnDelay = setTimeout(() => {
      showTurn.value = true;
      if (turnData.player.id === user.id) {
        showPanel.value = true;
      }
      clearTimeout(showTurnDelay);
    }, 400);
    if (user.isHost) {
      socket.emit("startTimer", user.roomId);
    }
  });

  socket.on("removeCharacterFromPanel", (data) => {
    const character = characterExists(data.character.name);
    if (character) {
      removeCharacter(data.character.name);
      panels.value = getPanels();
      splash.value = data.character;
      showPanel.value = false;
      showTurn.value = false;
      const splashDelay = setTimeout(() => {
        showSplash.value = true;
        clearTimeout(splashDelay);
      }, 500);
      const splashTimeout = setTimeout(() => {
        showSplash.value = false;
        clearTimeout(splashTimeout);
      }, 3000);
    }
    if (user.isHost) {
      socket.emit("stopTimer");
      const delay = data.character.name === "No Pick" ? 0 : 3000;
      const turnDelay = setTimeout(() => {
        nextTurn();
        clearTimeout(turnDelay);
      }, delay);
    }
  });

  socket.on("setNewSelection", (data: any) => {
    selection.value = data.newSelection;
  });

  socket.on("getTime", (timeValue: number) => {
    time.value = timeValue;
    if (time.value < 1) {
      selectionType.value = -1;
      selectedCharacterDialog.value = false;
    }
  });

  socket.on("goBack", () => {
    socket.emit("stopTimer");
    push({
      name: "Room",
      params: {
        roomId: user.roomId,
      },
    });
  });

  socket.on("chat", (chat: Chat[]) => {
    chatList.value = chat;
    if (!showChat.value) {
      newMessage.value = true;
      const newChat = chatList.value[chatList.value.length - 1];
      const newChatName = `${newChat.user.name} ${
        newChat.user.isHost ? "&#128081;" : ""
      }`.trim();
      const chatNotification = `${newChatName} said\n<b>${newChat.message}</b>`;
      toast(chatNotification, {
        type: "success",
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    }
  });

  socket.on("noPick", async (turn: Turn) => {
    selectionType.value = -1;
    selectedCharacter.value = NoPick;
    if (turn.selection) {
      selectType.value = 2;
    } else {
      selectType.value = 1;
    }
    addToSelection();
  });

  socket.on("gameCompleted", () => {
    hideDraft.value = true;
    const handleShowVSScreenDelay = setTimeout(() => {
      showVSScreen.value = true;
      clearTimeout(handleShowVSScreenDelay);
      const handlePlayer1PanelDelay = setTimeout(() => {
        showPlayerPanel1.value = true;
        clearTimeout(handlePlayer1PanelDelay);
        const handleVSDelay = setTimeout(() => {
          showVS.value = true;
          clearTimeout(handleVSDelay);
          const handlePlayer2PanelDelay = setTimeout(() => {
            showPlayerPanel2.value = true;
            clearTimeout(handlePlayer2PanelDelay);
          }, 300);
        }, 700);
      }, 500);
    }, 600);
  });
});

onUnmounted(() => {
  socket.off("draftStart");
  socket.off("getTime");
  socket.off("chat");
  socket.off("disconnected");
  socket.off("announceTurn");
  socket.off("noPick");
  socket.off("select");
  socket.off("goBack");
  socket.off("setNewSelection");
  socket.off("removeCharacterFromPanel");
});

function start() {
  gameStart.value = true;
  socket.emit("draftStart", user.roomId);
}

function goBack() {
  socket.emit("goBack", user.roomId);
}

function selectCharacter(character: Character) {
  if (selectionType.value !== -1) {
    selectedCharacter.value = character;
    selectedCharacterDialog.value = true;
  }
}

function nextTurn() {
  socket.emit("nextTurn", user.roomId);
}

function chooseCharacter(selectTypeValue: number) {
  selectType.value = selectTypeValue;
  selectedCharacterDialog.value = false;
  addToSelection();
}

function addToSelection() {
  const character = characterExists(selectedCharacter.value?.name);
  if (
    character ||
    (selectedCharacter && selectedCharacter.value?.name === "No Pick")
  ) {
    let newSelection = [...selection.value];
    newSelection = newSelection.map((selections: Selections) => {
      if (selections.player.id === user.id) {
        if (selectType.value === 2) {
          selections.selection.picks.characters[
            selections.selection.picks.pointer
          ] = selectedCharacter.value;
          selections.selection.picks.pointer++;
        } else if (selectType.value === 1) {
          selections.selection.bans.characters[
            selections.selection.bans.pointer
          ] = selectedCharacter.value;
          selections.selection.bans.pointer++;
        }
      }
      return selections;
    });
    showPanel.value = false;
    selectionType.value = -1;
    removeCharacterFromPanel();
    socket.emit("setNewSelection", { newSelection, roomId: user.roomId });
  }
}

function removeCharacterFromPanel() {
  const data = {
    character: selectedCharacter.value,
    roomId: user.roomId,
  };
  socket.emit("removeCharacterFromPanel", data);
}

function handleFilter() {
  filterCharacters(filter.value);
  panels.value = getPanels();
}

function handleShowChat() {
  showChat.value = true;
  newMessage.value = false;
}

function sendChat() {
  if (message.value) {
    const chat = {
      user: user,
      message: message.value,
    };
    chatList.value.push(chat);
    message.value = "";
    socket.emit("chat", chatList.value);
  }
}

function getCharacterBorder(character: Character) {
  let border = "border-gray-700";
  if (character?.vision === "Anemo") border = "border-green-300";
  else if (character?.vision === "Geo") border = "border-yellow-600";
  else if (character?.vision === "Electro") border = "border-purple-600";
  else if (character?.vision === "Dendro") border = "border-green-800";
  else if (character?.vision === "Hydro") border = "border-blue-700";
  else if (character?.vision === "Pyro") border = "border-red-400";
  else if (character?.vision === "Cryo") border = "border-blue-200";
  return border;
}
</script>
