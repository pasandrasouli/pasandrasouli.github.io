<script setup lang="ts">
import type { CaseStudyBlock } from '../types'

defineProps<{
  block: CaseStudyBlock
}>()
</script>

<template>
  <div v-if="block.type === 'section'" class="mt-10 first:mt-0">
    <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ block.title }}</h2>
    <p v-if="block.description" class="text-white/70 text-lg leading-relaxed">{{ block.description }}</p>
    <figure v-if="block.imageSrc" class="mt-6">
      <img :src="block.imageSrc" :alt="block.title" class="rounded-2xl w-full" />
    </figure>
  </div>

  <figure v-else-if="block.type === 'image'" class="my-8">
    <img :src="block.src" :alt="block.caption || ''" class="rounded-2xl w-full" />
    <figcaption v-if="block.caption" class="text-white/40 text-sm text-center mt-3">{{ block.caption }}</figcaption>
  </figure>

  <div v-else-if="block.type === 'twoColumn'" class="grid md:grid-cols-2 gap-8 my-10">
    <div class="glass rounded-2xl p-6">
      <p class="text-white/70">{{ block.left }}</p>
    </div>
    <div class="glass rounded-2xl p-6">
      <p class="text-white/70">{{ block.right }}</p>
    </div>
  </div>

  <blockquote
    v-else-if="block.type === 'quote'"
    class="border-l-4 border-white/30 pl-6 my-8 italic text-white/60 text-xl"
  >
    <p>{{ block.content }}</p>
    <footer class="text-sm text-white/40 mt-2 not-italic">— {{ block.author }}</footer>
  </blockquote>

  <div v-else-if="block.type === 'resultsTable'" class="bg-white/5 rounded-2xl p-6 my-8">
    <h3 class="text-xl font-semibold mb-4">Key Results</h3>
    <ul class="list-disc list-inside space-y-2 text-white/70">
      <li v-for="item in block.items" :key="item">{{ item }}</li>
    </ul>
  </div>

  <div v-else-if="block.type === 'withBullet'" class="mt-10">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">{{ block.title }}</h2>

    <div v-if="block.titleGroups.length" class="space-y-4 mb-8">
      <div
        v-for="(group, index) in block.titleGroups"
        :key="index"
        class="text-white/70 text-lg leading-relaxed"
      >
        <!-- render each as block elements -->
        <div class="text-white font-medium">{{ group.subTitle }}</div>
        <div class="text-white/70">{{ group.description }}</div>
      </div>
    </div>

    <ul v-if="block.items.length" class="space-y-3">
      <li
        v-for="(item, index) in block.items"
        :key="index"
        class="flex gap-3 text-white/70 text-lg leading-relaxed"
      >
        <span class="text-white/40 shrink-0">•</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>

  <div v-else-if="block.type === 'video'" class="aspect-video my-8">
    <iframe :src="block.embedUrl" class="w-full h-full rounded-2xl" frameborder="0" allowfullscreen></iframe>
  </div>

  <div
    v-else
    class="my-8 rounded-2xl border border-dashed border-amber-400/40 bg-amber-400/5 p-4 text-amber-200/70 text-sm"
  >
    Unsupported case study block type.
  </div>
</template>
