<script setup lang="ts">
import CaseStudyBlock from './CaseStudyBlock.vue'
import type { Page, Project } from '../types'

defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{
  navigate: [page: Page]
}>()

function back() {
  emit('navigate', 'work')
}
</script>

<template>
  <div v-if="project" class="w-full">
    <div class="max-w-5xl mx-auto px-6 py-8">
      <button
        @click="back"
        class="glass px-5 py-2 rounded-full text-sm flex items-center gap-2 mb-8 hover:bg-white/5 transition"
      >
        ← Back to all work
      </button>

      <div class="glass rounded-3xl overflow-hidden">
        <img :src="project.coverImage" :alt="project.title" class="w-full h-[450px] object-cover" />
        <div class="p-8 md:p-12">
          <div class="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <h1 class="text-4xl md:text-5xl font-semibold tracking-tight">{{ project.title }}</h1>
              <p class="text-white/40 mt-2 text-lg">{{ project.category }}</p>
            </div>
          </div>

          <p class="text-white/70 text-lg leading-relaxed mb-10">{{ project.fullDescription }}</p>

          <div v-if="project.caseStudy?.length" class="prose prose-invert max-w-none">
            <CaseStudyBlock v-for="(block, index) in project.caseStudy" :key="index" :block="block" />
          </div>

          <div v-else>
            <div class="grid md:grid-cols-2 gap-8 mt-10">
              <div class="glass rounded-2xl p-6">
                <h3 class="text-xl font-medium mb-2">Challenge</h3>
                <p class="text-white/50">{{ project.challenge }}</p>
              </div>
              <div class="glass rounded-2xl p-6">
                <h3 class="text-xl font-medium mb-2">Solution</h3>
                <p class="text-white/50">{{ project.solution }}</p>
              </div>
            </div>
            <div class="mt-10">
              <h3 class="text-2xl font-medium mb-4">Key results</h3>
              <ul class="list-disc list-inside text-white/60 space-y-2">
                <li v-for="result in project.results" :key="result">{{ result }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
