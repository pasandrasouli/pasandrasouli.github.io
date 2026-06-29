<script setup lang="ts">
import { site } from '../data/site'

const content = site.contact
</script>

<template>
  <div class="w-full">
    <div class="relative overflow-hidden py-12">
      <div class="glow bottom-[-100px] right-[-100px]"></div>
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="uppercase tracking-[0.25em] text-white/40 text-xs mb-6">{{ content.eyebrow }}</p>
        <h2 class="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
          {{ content.title }}
        </h2>
        <p class="text-white/50 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
          {{ content.description }}
        </p>
        <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            v-for="link in content.links"
            :key="link.href"
            :href="link.href"
            :target="link.href.startsWith('http') ? '_blank' : undefined"
            :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="px-8 py-4 rounded-full transition inline-flex items-center gap-2"
            :class="
              link.variant === 'primary'
                ? 'bg-white text-black font-medium hover:scale-105'
                : 'glass hover:bg-white/5'
            "
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
