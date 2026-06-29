<script setup lang="ts">
import { site } from '../data/site'

const content = site.process
</script>

<template>
  <div class="w-full">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="mb-20">
        <p class="uppercase tracking-[0.25em] text-white/40 text-xs mb-4">{{ content.eyebrow }}</p>
        <h2 class="text-5xl font-semibold tracking-tight">{{ content.title }}</h2>
      </div>
      <div class="grid md:grid-cols-4 gap-6">
        <div v-for="step in content.steps" :key="step.number" class="glass rounded-3xl p-8">
          <div class="text-white/30 text-sm mb-8">{{ step.number }}</div>
          <h3 class="text-2xl mb-4">{{ step.title }}</h3>
          <p class="text-white/40 leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
