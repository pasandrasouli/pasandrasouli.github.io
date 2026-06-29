<script setup lang="ts">
import type { Page, Project } from '../types'
import { site } from '../data/site'

defineProps<{
  projects: Project[]
}>()

const emit = defineEmits<{
  'open-project': [id: number]
}>()

const content = site.work

function openProject(id: number) {
  emit('open-project', id)
}
</script>

<template>
  <div class="w-full">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="flex items-end justify-between mb-14 flex-wrap gap-6">
        <div>
          <p class="uppercase tracking-[0.25em] text-white/40 text-xs mb-4">{{ content.eyebrow }}</p>
          <h2 class="text-4xl md:text-6xl font-semibold tracking-tight mb-4">{{ content.title }}</h2>
          <p class="text-white/40 max-w-sm text-base mb-4">{{ content.description }}</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card glass rounded-[28px] overflow-hidden cursor-pointer group"
          @click="openProject(project.id)"
        >
          <div class="overflow-hidden">
            <img :src="project.coverImage" :alt="project.title" class="work-thumbnail w-full h-[280px] object-cover" />
          </div>
          <div class="p-8">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-medium">{{ project.title }}</h3>
                <p class="text-white/40 mt-2">{{ project.category }}</p>
              </div>
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition">
                ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
