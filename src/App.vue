<template>
  <div class="relative z-0 min-h-screen overflow-x-hidden bg-gray-900">
    <div
      className="absolute top-0 left-0 h-full w-screen bg-bg bg-cover bg-center opacity-30 z-[-20]"
    ></div>
    <vue-particles
      id="tsparticles"
      class="fixed z-[-10]"
      :particlesInit="particlesInit"
      :options="options"
    />
    <div class="z-0 flex min-h-screen flex-col justify-between">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <div className="flex justify-between px-16 py-4 bg-gray-700">
        <p className="text-white font-light">
          Developed by <span className="font-semibold">v.rx</span>
        </p>
        <div className="flex items-center">
          <p className="text-white font-light mr-4">Made with</p>
          <div className="flex gap-2">
            <a href="https://vitejs.dev" target="_blank"
              ><img
                className="h-6 w-auto"
                :src="`${origin}/assets/Footer/vite.webp`"
            /></a>
            <a href="https://vuejs.org" target="_blank"
              ><img
                className="h-6 w-auto"
                :src="`${origin}/assets/Footer/vue.webp`"
            /></a>
            <a href="https://expressjs.com" target="_blank"
              ><img
                className="h-6 w-auto"
                :src="`${origin}/assets/Footer/node.webp`"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loadSlim } from "tsparticles-slim";

const origin = window.location.origin;

const options = {
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: ["#31dec1", "#a37800", "#c336ff", "#53de35"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 3,
      },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 4,
      direction: "top-left",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  retina_detect: true,
};

const particlesInit = async (engine: any) => {
  await loadSlim(engine);
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translate(-100px);
}

.fade-leave-to {
  transform: translate(100px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out, transform 0.5s ease-out;
}
</style>
