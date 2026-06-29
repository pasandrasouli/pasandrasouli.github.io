<script setup lang="ts">
import { site } from '../data/site'

const content = site.about
</script>

<template>
  <div class="w-full">
    <div class="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-16">
        <div class="shrink-0">
          <img
            :src="content.profileImage"
            :alt="content.profileAlt"
            class="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white/20 shadow-lg"
          />
        </div>

        <div class="text-center md:text-left">
          <p class="uppercase tracking-[0.25em] text-white/40 text-xs mb-2">{{ content.eyebrow }}</p>
          <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            <span v-for="(line, index) in content.titleLines" :key="line">
              {{ line }}<br v-if="index < content.titleLines.length - 1" />
            </span>
          </h2>
          <div class="mt-3 max-w-md">
            <p class="text-white/40 text-base">{{ content.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="prose prose-invert max-w-none">
        <div class="space-y-6 text-white/60 text-lg leading-relaxed">
          <p v-for="(paragraph, index) in content.paragraphs" :key="index">{{ paragraph }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-12">
        <div v-for="stat in content.stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-semibold text-white">{{ stat.value }}</div>
          <div class="text-white/40 text-sm mt-1">{{ stat.label }}</div>
        </div>
      </div>

      <div class="mt-16 glass rounded-2xl p-8 text-center">
        <p class="text-white/70 italic text-lg">“{{ content.quote.text }}”</p>
        <p class="text-white/30 text-sm mt-3">{{ content.quote.author }}</p>
      </div>
    </div>
  </div>
</template>
