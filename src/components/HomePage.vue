<script setup lang="ts">
import type { Page } from '../types'
import { site } from '../data/site'

const emit = defineEmits<{
  navigate: [page: Page]
}>()

type Particle = {
  id: string
  className: string
  style: string
}

const content = site.home

const particles: Particle[] = [
  {
    id: 'p1',
    className: 'particle w-1 h-1 bg-white-400/40 rounded-full top-[10%] left-[5%] blur-none',
    style: 'animation: floatParticle 8s infinite alternate;',
  },
  {
    id: 'p2',
    className:
      'particle w-1.5 h-1.5 bg-white-500/30 rounded-full top-[20%] left-[15%] blur-[0.5px]',
    style: 'animation: floatParticle 12s infinite alternate-reverse;',
  },
  {
    id: 'p3',
    className: 'particle w-1 h-1 bg-white-400/40 rounded-full top-[30%] left-[25%] blur-none',
    style: 'animation: floatParticle 10s infinite alternate;',
  },
  {
    id: 'p4',
    className: 'particle w-2 h-2 bg-white-400/30 rounded-full top-[15%] left-[40%] blur-[0.5px]',
    style: 'animation: floatParticle 14s infinite alternate-reverse;',
  },
  {
    id: 'p5',
    className: 'particle w-1 h-1 bg-white-400/40 rounded-full top-[45%] left-[10%] blur-none',
    style: 'animation: floatParticle 9s infinite alternate;',
  },
  {
    id: 'p6',
    className:
      'particle w-1.5 h-1.5 bg-white-500/35 rounded-full top-[60%] left-[20%] blur-[0.5px]',
    style: 'animation: floatParticle 11s infinite alternate-reverse;',
  },
  {
    id: 'p7',
    className: 'particle w-1 h-1 bg-white-400/40 rounded-full top-[75%] left-[35%] blur-none',
    style: 'animation: floatParticle 13s infinite alternate;',
  },
  {
    id: 'p8',
    className: 'particle w-2 h-2 bg-white-400/30 rounded-full top-[85%] left-[50%] blur-[0.5px]',
    style: 'animation: floatParticle 15s infinite alternate-reverse;',
  },
  {
    id: 'p9',
    className: 'particle w-1 h-1 bg-white-500/40 rounded-full top-[5%] left-[70%] blur-none',
    style: 'animation: floatParticle 7s infinite alternate;',
  },
  {
    id: 'p10',
    className:
      'particle w-1.5 h-1.5 bg-white-400/35 rounded-full top-[25%] left-[80%] blur-[0.5px]',
    style: 'animation: floatParticle 16s infinite alternate-reverse;',
  },
  {
    id: 'p11',
    className: 'particle w-1 h-1 bg-white-500/40 rounded-full top-[50%] left-[90%] blur-none',
    style: 'animation: floatParticle 12s infinite alternate;',
  },
  {
    id: 'p12',
    className: 'particle w-2 h-2 bg-white-500/30 rounded-full top-[70%] left-[75%] blur-[0.5px]',
    style: 'animation: floatParticle 10s infinite alternate-reverse;',
  },
  {
    id: 'p13',
    className: 'particle w-1 h-1 bg-white-500/40 rounded-full top-[40%] left-[60%] blur-none',
    style: 'animation: floatParticle 14s infinite alternate;',
  },
  {
    id: 'p14',
    className:
      'particle w-1.5 h-1.5 bg-white-400/35 rounded-full top-[80%] left-[85%] blur-[0.5px]',
    style: 'animation: floatParticle 9s infinite alternate-reverse;',
  },
  {
    id: 'p15',
    className: 'particle w-1 h-1 bg-white-400/40 rounded-full top-[10%] left-[95%] blur-none',
    style: 'animation: floatParticle 11s infinite alternate;',
  },
]

function nav(page: Page) {
  emit('navigate', page)
}
</script>

<template>
  <div id="home-hero" class="w-full relative overflow-hidden min-h-[85vh] flex items-center">
    <div class="soft-glow"></div>

    <div
      v-for="particle in particles"
      :key="particle.id"
      :class="particle.className"
      :style="particle.style"
    ></div>

    <div
      class="absolute w-[350px] h-[350px] rounded-full bg-blue-900/15 blur-[90px] top-[30%] left-[20%] circle-slow"
      style="animation-duration: 28s"
    ></div>
    <div
      class="absolute w-[280px] h-[280px] rounded-full bg-indigo-800/10 blur-[80px] top-[10%] right-[10%] circle-slow"
      style="animation-duration: 30s"
    ></div>
    <div
      class="absolute w-[380px] h-[380px] rounded-full bg-blue-800/10 blur-[95px] bottom-[10%] left-[20%] circle-slower"
      style="animation-duration: 26s"
    ></div>
    <div
      class="absolute w-[320px] h-[320px] rounded-full bg-white/10 blur-[85px] top-[45%] right-[25%] circle-slow"
      style="animation-duration: 24s"
    ></div>
    <div
      class="absolute w-[420px] h-[420px] rounded-full bg-indigo-950/20 blur-[105px] bottom-[30%] right-[40%] circle-slower"
      style="animation-duration: 32s"
    ></div>
    <div
      class="absolute w-[250px] h-[250px] rounded-full bg-blue-950/10 blur-[75px] top-[75%] left-[45%] circle-slow"
      style="animation-duration: 27s"
    ></div>
    <div
      class="absolute w-[550px] h-[550px] rounded-full bg-white/5 blur-[130px] top-[20%] right-[-20%] circle-slower"
      style="animation-duration: 29s"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <span
        class="inline-block text-xs tracking-[0.25em] uppercase text-white/40 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >{{ content.badge }}</span
      >
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.05em] max-w-5xl mx-auto leading-[1.1]"
      >
        {{ content.titlePrefix }}
        <span class="gradient-text">{{ content.titleHighlight }}</span>
      </h1>
      <p class="mt-8 text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
        {{ content.description }}
      </p>
      <div class="mt-12 flex gap-4 justify-center flex-wrap">
        <a
          v-for="cta in content.ctas"
          :key="cta.page"
          :href="`#${cta.page}`"
          @click.prevent="nav(cta.page)"
          class="px-8 py-4 rounded-full transition inline-block"
          :class="
            cta.page === 'work'
              ? 'bg-white text-black font-medium hover:scale-105 shadow-lg'
              : 'glass hover:bg-white/10 backdrop-blur-md'
          "
        >
          {{ cta.label }}
        </a>
      </div>

      <div class="mt-20 marquee-container">
        <div class="marquee-track">
          <span v-for="skill in content.skills" :key="skill" class="skill-tag">{{ skill }}</span>
          <span v-for="skill in content.skills" :key="`dup-${skill}`" class="skill-tag">{{
            skill
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
