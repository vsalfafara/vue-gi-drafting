<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="emit('close')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-lg transform divide-y divide-slate-800 overflow-hidden rounded-2xl bg-slate-900 text-left align-middle shadow-xl ring-1 ring-slate-800 transition-all"
            >
              <DialogTitle
                as="h3"
                class="p-6 text-2xl font-medium leading-6 text-gray-300"
              >
                <slot name="title"></slot>
              </DialogTitle>
              <div class="p-6">
                <slot></slot>
              </div>
              <div
                v-if="slots.footer"
                class="flex flex-wrap justify-end gap-2 p-4"
              >
                <slot name="footer"></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { useSlots } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

type Props = {
  isOpen: boolean;
};

type Emits = {
  (e: "close"): void;
};

const { isOpen } = defineProps<Props>();
const slots = useSlots();

const emit = defineEmits<Emits>();
</script>
