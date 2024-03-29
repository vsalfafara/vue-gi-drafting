<template>
  <div class="flex min-h-[calc(100vh-4rem)] w-full">
    <div
      v-if="showVSScreen"
      class="flex w-full flex-col items-center justify-center text-white"
    >
      <template v-if="user.isHost">
        <div class="absolute right-4 top-4 z-10">
          <button class="warning" @click="goBack">Go back to Room</button>
        </div>
      </template>
      <div :class="gameType === 'abyss' ? 'min-h-[748px]' : 'min-h-[620px]'">
        <TransitionRoot
          :show="showPlayerPanel1"
          enter="transition duration-700"
          enterFrom="opacity-0 translate-x-24"
          enterTo="opacity-100 translate-x-0"
          as="template"
        >
          <div
            class="my-2 flex flex-col-reverse items-center justify-center sm:flex-row"
          >
            <div
              :class="`grid ${
                noOfSelection === 1
                  ? 'grid-cols-1'
                  : noOfSelection === 2
                  ? 'grid-cols-2'
                  : noOfSelection === 3
                  ? 'grid-cols-3'
                  : 'grid-cols-4'
              } md:grid-cols-${
                gameType !== 'abyss' ? noOfSelection : noOfSelection / 2
              } justify-end`"
            >
              <template
                v-for="(character, index) in selection[0].selection.picks
                  .characters"
                :key="index"
              >
                <template v-if="character.name !== 'No Pick'">
                  <div
                    :class="`${
                      gameType === 'abyss'
                        ? 'h-40 w-28'
                        : 'h-36 w-20 sm:h-44 sm:w-24 md:h-56 md:w-32 lg:h-64 lg:w-40'
                    } skew-x-12 overflow-hidden bg-gray-800 bg-opacity-70`"
                  >
                    <img
                      :src="`assets/Characters/VS/${character?.image}`"
                      class="h-full w-full skew-x-[-12deg] scale-[1.33] object-cover object-center"
                    />
                  </div>
                </template>
              </template>
            </div>
            <h1
              className="w-44 mb-4 sm:mb-0 break-words text-4xl text-center sm:ml-16"
            >
              {{ selection[0]?.player.name }}
            </h1>
          </div>
        </TransitionRoot>
        <TransitionRoot
          :show="showVS"
          enter="transition duration-300"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          as="template"
        >
          <h1 className="text-6xl italic text-center my-4">VS</h1>
        </TransitionRoot>
        <TransitionRoot
          :show="showPlayerPanel2"
          enter="transition duration-700"
          enterFrom="opacity-0 -translate-x-24"
          enterTo="opacity-100 translate-x-0"
        >
          <div
            class="my-2 flex flex-col-reverse items-center justify-center sm:flex-row"
          >
            <h1
              className="w-44 mt-4 sm:mt-0 break-words text-4xl text-center sm:mr-16"
            >
              {{ selection[1]?.player.name }}
            </h1>
            <div
              :class="`grid ${
                noOfSelection === 1
                  ? 'grid-cols-1'
                  : noOfSelection === 2
                  ? 'grid-cols-2'
                  : noOfSelection === 3
                  ? 'grid-cols-3'
                  : 'grid-cols-4'
              } justify-end md:grid-cols-${
                gameType !== 'abyss' ? noOfSelection : noOfSelection / 2
              }`"
            >
              <template
                v-for="(character, index) in selection[1].selection.picks
                  .characters"
                :key="index"
              >
                <template v-if="character.name !== 'No Pick'">
                  <div
                    :class="`${
                      gameType === 'abyss'
                        ? 'h-40 w-28'
                        : 'h-36 w-20 sm:h-44 sm:w-24 md:h-56 md:w-32 lg:h-64 lg:w-40'
                    } skew-x-12 overflow-hidden bg-gray-800 bg-opacity-70`"
                  >
                    <img
                      :src="`assets/Characters/VS/${character?.image}`"
                      class="h-full w-full skew-x-[-12deg] scale-[1.33] object-cover object-center"
                    />
                  </div>
                </template>
              </template>
            </div>
          </div>
        </TransitionRoot>
      </div>
    </div>
    <TransitionRoot
      appear
      :show="!hideDraft"
      leave="transition duration-500"
      leaveFrom="opacity-100 translate-y-8"
      leaveTo="opacity-0 translate-y-16"
      as="template"
    >
      <div class="flex w-full flex-col">
        <div class="relative z-20 m-4 flex h-16 justify-center">
          <div
            v-if="withTimer === 'Yes'"
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
        <div class="mx-auto flex h-[500px] justify-center">
          <div
            class="flex w-full max-w-[900px] flex-col items-center justify-center"
          >
            <TransitionRoot
              appear
              :show="draftStart"
              enter="transition duration-300"
              enterFrom="opacity-0 -translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-300"
              leaveFrom="opacity-100 translate-y-8"
              leaveTo="opacity-0 translate-y-16"
              as="template"
            >
              <h1 class="text-6xl font-bold text-white">Draft Starting!</h1>
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
                <h1
                  class="max-w-lg break-all text-center text-3xl font-bold italic text-white"
                >
                  {{
                    turn?.player.id === user.id
                      ? "Your"
                      : `${turn?.player.name}'s`
                  }}
                  turn to
                  {{ turn?.selection ? "pick" : "ban" }}
                </h1>
              </div>
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
              <img
                :src="`assets/Characters/Splash/${splash?.image}`"
                class="h-[550px] w-auto"
                alt=""
              />
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
                class="z-10 h-[350px]"
              >
                <div
                  class="scrollbar-thumb-rounded-full z-100 h-full overflow-y-scroll rounded-md border-4 border-slate-800 bg-slate-900 p-4 scrollbar-thin scrollbar-thumb-gray-400"
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
        </div>
        <div
          class="mx-auto mb-4 flex w-full max-w-[1200px] justify-evenly gap-2"
        >
          <div class="flex w-full flex-col justify-center gap-2">
            <div
              class="flex justify-center gap-2 px-4 text-center text-3xl font-bold text-white"
            >
              <p class="truncate">
                {{ selection[0]?.player.name }}
              </p>
              <p>
                {{ selection[0]?.player.id === user.id ? "(You)" : "" }}
              </p>
            </div>
            <div class="flex flex-row flex-wrap items-center justify-center">
              <Picks
                v-for="character in selection[0].selection.picks.characters"
                :key="character?.name"
                :character="character"
                :gameType="gameType"
                :mode="mode"
              />
            </div>
            <div class="flex flex-wrap justify-center">
              <Bans
                v-for="character in selection[0].selection.bans.characters"
                :key="character?.name"
                :character="character"
              />
            </div>
          </div>
          <div class="flex w-full flex-col justify-center gap-2">
            <div
              class="flex justify-center gap-2 px-4 text-center text-3xl font-bold text-white"
            >
              <p class="truncate">
                {{ selection[1]?.player.name }}
              </p>
              <p>
                {{ selection[1]?.player.id === user.id ? "(You)" : "" }}
              </p>
            </div>
            <div class="flex flex-row flex-wrap items-center justify-center">
              <Picks
                v-for="character in selection[1].selection.picks.characters"
                :key="character?.name"
                :character="character"
                :gameType="gameType"
                :mode="mode"
              />
            </div>
            <div class="flex flex-wrap justify-center">
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
      <div class="text-sm text-gray-300">
        Do you want to {{ selectionType ? "pick" : "ban" }}
        {{ selectedCharacter?.name }}?
      </div>
      <template
        #footer
        v-if="withTimer === 'No' || (withTimer === 'Yes' && time > 0)"
      >
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
          :class="`m-2 bg-slate-800 px-4 py-2 text-white ${
            chat.user.id === user.id ? 'text-right' : 'text-left'
          }`"
        >
          <p class="mb-2 text-sm">
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
              <span class="font-bold">{{ chat.user.name }}</span>
            </span>
          </p>
          <p class="text-sm">{{ chat.message }}</p>
        </div>
      </div>
      <template #footer>
        <form class="flex w-full items-center gap-2" @submit.prevent="sendChat">
          <Input v-model="message" placeholder="Type your message..." />
          <button class="primary" @click="sendChat">Send</button>
        </form>
      </template>
    </Modal>
    <Modal :is-open="showHelp" @close="showHelp = false">
      <template #title>How to play</template>
      <div class="mt-2">
        <p className="text-sm text-gray-300 mb-2">
          The game will start when the game master clicks the start button (not
          visible for players).
        </p>
        <p className="text-sm text-gray-300 mb-2">
          A text will be displayed on the center of this page. This is the
          indicator for who is now selecting a character.
        </p>
        <p className="text-sm text-gray-300 mb-2">
          For the players, to select a character, simply click a character in
          the character table in the center. A dialog will appear, asking if the
          player wishes to proceed selecting that character. Once the character
          is selected, that character will be removed from the table, and the
          player will not be able to select a character, as this is now the
          other player's turn.
        </p>
        <p className="text-sm text-gray-300 mb-2">
          To find a specific character, simply type the name of that character
          in the text box above the character table.
        </p>
        <p className="text-sm text-gray-300 mb-2">
          The game ends when all players have selected the appropriate number of
          characters for the mode, or when the game master clicks the
          <span className="font-semibold">Go Back to Room</span>
          button (not visible for players or viewers).
        </p>
        <p className="text-sm text-gray-300 mb-8">
          When the game master clicks the
          <span className="font-semibold">Go Back to Room</span>
          button, the game master, including the players and viewers, will be
          moved back to the room page where the game master can readjust the
          game settings.
        </p>
        <p className="text-md text-red-600 mb-2">
          <span className="font-bold">WARNING</span>
        </p>
        <p className="text-sm text-gray-300 mb-2">
          When you are in this page, do not attempt to refresh, as this might
          cause the game to break. Also, if you are a player, do not press
          <span className="italic">alt + tab</span> or change windows, as this
          will cause some characters to not appear in your character panel
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
import Picks from "./components/panels/Picks.vue";
import Bans from "./components/panels/Bans.vue";
import { ssGetAutoban, ssGetSelection, ssGetUser } from "@/storage";
import { User } from "@/types/storage";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
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
const noOfSelection = ref<number>(
  selection.value[0].selection.picks.characters.length
);
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
        bans.includes(character.vision?.toLowerCase()) ||
        bans.includes(character.version)
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
      selectedCharacter.value = NoPick;
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
</script>
