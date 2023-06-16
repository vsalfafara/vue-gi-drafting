<template>
  <div class="flex flex-col justify-center gap-2">
    <div class="flex flex-wrap gap-2">
      <Button @click="openModal">Button</Button>
      <Button variant="info" @click="openModal">Button</Button>
      <Button variant="success" @click="openModal">Button</Button>
      <Button variant="warning" @click="openModal">Button</Button>
      <Button variant="danger" @click="openModal">Button</Button>
    </div>
    <div class="flex flex-wrap gap-2">
      <Button @click="openModal" disabled>Button</Button>
      <Button variant="info" @click="openModal" disabled>Button</Button>
      <Button variant="success" @click="openModal" disabled>Button</Button>
      <Button variant="warning" @click="openModal" disabled>Button</Button>
      <Button variant="danger" @click="openModal" disabled>Button</Button>
    </div>
    <div class="flex flex-wrap gap-2">
      <Button variant="light" @click="openModal">Button</Button>
      <Button variant="info-light" @click="openModal">Button</Button>
      <Button variant="success-light" @click="openModal">Button</Button>
      <Button variant="warning-light" @click="openModal">Button</Button>
      <Button variant="danger-light" @click="openModal">Button</Button>
    </div>
    <div class="flex flex-wrap gap-2">
      <Button variant="light" @click="openModal" disabled>Button</Button>
      <Button variant="info-light" @click="openModal" disabled>Button</Button>
      <Button variant="success-light" @click="openModal" disabled
        >Button</Button
      >
      <Button variant="warning-light" @click="openModal" disabled
        >Button</Button
      >
      <Button variant="danger-light" @click="openModal" disabled>Button</Button>
    </div>
    <div class="flex flex-wrap gap-2">
      <Button variant="text" @click="openModal">Button</Button>
    </div>
    <div class="flex flex-wrap gap-2">
      <Button variant="text" @click="openModal" disabled>Button</Button>
    </div>
    <div class="flex">
      <Card>
        <template #title> test </template>
        Your payment has been successfully submitted. We've sent you an email
        with all of the details of your order.
        <template #footer>
          <div class="flex justify-end gap-2 p-5">
            <Button variant="text">Help</Button>
            <Button variant="light">Copy Invite Link</Button>
            <Button variant="primary">Start Game</Button>
          </div>
        </template>
      </Card>
    </div>
    <div class="flex">
      <FormItem>
        <Input
          v-model="text"
          @input="(e: any) => console.log(e.target.value)"
        ></Input>
      </FormItem>
    </div>
    <div class="flex">
      <FormItem>
        <Checkbox
          name="Simple"
          label-name="Simple"
          id="test"
          v-model="check1"
          @change="(e: any) => console.log(e.target.value)"
        />
        <Checkbox
          name="Simple1"
          label-name="Simple1"
          id="test1"
          v-model="check2"
          @change="(e: any) => console.log(e.target.value)"
        />
      </FormItem>
    </div>
    <div class="flex">
      <Card class="text-gray-600">
        <template #title>Game Settings </template>
        <FormItem label="Test Label">
          <Radio
            name="Simple2"
            label-name="Simple2"
            id="test2"
            v-model="radio1"
            @change="(e: any) => console.log(e.target.value)"
          />
          <Radio
            name="Simple2"
            label-name="Simple3"
            id="test3"
            v-model="radio2"
            @change="(e: any) => console.log(e.target.value)"
          />
        </FormItem>
      </Card>
    </div>
    <Modal :is-open="isOpen" @close="closeModal">
      <template #title>Payment successful</template>
      <div class="text-sm text-gray-500">
        Your payment has been successfully submitted. We've sent you an email
        with all of the details of your order.
      </div>
      <template #footer>
        <!-- <Button variant="light" @click="closeModal"></Button> -->
        <router-link to="/room/1">
          <Button variant="light">Room</Button>
        </router-link>
        <Button @click.once="closeModal">Close</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Modal from "@/components/Modal/index.vue";
import Card from "@/components/Card/index.vue";
import FormItem from "@/components/FormItem/index.vue";
import Input from "@/components/Input/Input.vue";
import Checkbox from "@/components/Input/Checkbox.vue";
import Radio from "@/components/Input/Radio.vue";
import { ref } from "vue";

const isOpen = ref<boolean>(false);

const radio1 = ref("Radio1");
const radio2 = ref("Radio2");

const check1 = ref("Check1");
const check2 = ref("Check2");

const text = ref("");

function openModal() {
  isOpen.value = true;
  console.log("Modal opened");
}

function closeModal() {
  isOpen.value = false;
  console.log("Modal closed");
}
</script>
