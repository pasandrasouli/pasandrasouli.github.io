<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '../types'
import { site } from '../data/site'

const props = defineProps<{
  projects: Project[]
  currentProjectId: number
}>()

const emit = defineEmits<{
  'open-project': [id: number]
}>()

const content = site.projectDetail
const trackRef = ref<HTMLElement | null>(null)

const otherProjects = computed(() =>
  props.projects.filter((project) => project.id !== props.currentProjectId),
)

function scrollBy(direction: 'prev' | 'next') {
  const track = trackRef.value
  if (!track) return
  const amount = track.clientWidth * 0.85
  track.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' })
}

function openProject(id: number) {
  emit('open-project', id)
}
</script>

<template>
  <section v-if="otherProjects.length" class="mt-20 border-t border-white/10 pt-16">
    <div class="flex items-end justify-between gap-6 mb-10 flex-wrap">
      <div>
        <p class="uppercase tracking-[0.25em] text-white/40 text-xs mb-4">{{ content.moreProjectsEyebrow }}</p>
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">{{ content.moreProjectsTitle }}</h2>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="glass w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 transition"
          aria-label="Previous projects"
          @click="scrollBy('prev')"
        >
          ←
        </button>
        <button
          type="button"
          class="glass w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 transition"
          aria-label="Next projects"
          @click="scrollBy('next')"
        >
          →
        </button>
      </div>
    </div>

    <div
      ref="trackRef"
      class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
    >
      <article
        v-for="item in otherProjects"
        :key="item.id"
        class="project-card glass rounded-[28px] overflow-hidden cursor-pointer group shrink-0 w-[85%] sm:w-[70%] md:w-[45%] snap-start"
        @click="openProject(item.id)"
      >
        <div class="overflow-hidden">
          <img
            :src="item.coverImage"
            :alt="item.title"
            class="work-thumbnail w-full h-[220px] object-cover"
          />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h3 class="text-xl font-medium">{{ item.title }}</h3>
              <p class="text-white/40 mt-2 text-sm">{{ item.category }}</p>
            </div>
            <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition shrink-0">
              ↗
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
