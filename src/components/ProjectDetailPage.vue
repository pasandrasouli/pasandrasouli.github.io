<script setup lang="ts">
import CaseStudyBlock from './CaseStudyBlock.vue'
import OtherProjectsSlider from './OtherProjectsSlider.vue'
import type { Page, Project } from '../types'

defineProps<{
  project: Project | null
  projects: Project[]
}>()

const emit = defineEmits<{
  navigate: [page: Page]
  'open-project': [id: number]
}>()

function back() {
  emit('navigate', 'work')
}

function openProject(id: number) {
  emit('open-project', id)
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
        </div>
      </div>

      <OtherProjectsSlider
        :projects="projects"
        :current-project-id="project.id"
        @open-project="openProject"
      />
    </div>
  </div>
</template>
