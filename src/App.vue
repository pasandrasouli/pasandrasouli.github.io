<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { projects } from './data/projects'
import { useGlassCursor } from './composables/useGlassCursor'
import { SITE_TITLE } from './constants'
import type { Page } from './types'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomePage from './components/HomePage.vue'
import WorkPage from './components/WorkPage.vue'
import ProjectDetailPage from './components/ProjectDetailPage.vue'
import AboutPage from './components/AboutPage.vue'
import ProcessPage from './components/ProcessPage.vue'
import ContactPage from './components/ContactPage.vue'

const currentPage = ref<Page>('home')
const selectedProjectId = ref<number | null>(null)
const glassCursor = ref<HTMLElement | null>(null)

const selectedProject = computed(() => {
  if (!selectedProjectId.value) return null
  return projects.find((p) => p.id === selectedProjectId.value) ?? null
})

useGlassCursor(currentPage, glassCursor)

function updateDocumentTitle() {
  if (currentPage.value === 'project-detail' && selectedProject.value) {
    document.title = `${selectedProject.value.title} — ${SITE_TITLE}`
    return
  }

  const pageTitles: Record<Exclude<Page, 'project-detail'>, string> = {
    home: SITE_TITLE,
    work: `Work — ${SITE_TITLE}`,
    about: `About — ${SITE_TITLE}`,
    process: `Process — ${SITE_TITLE}`,
    contact: `Contact — ${SITE_TITLE}`,
  }

  document.title = pageTitles[currentPage.value as Exclude<Page, 'project-detail'>] ?? SITE_TITLE
}

function navigate(page: Page, projectId: number | null = null) {
  if (page === 'project-detail' && projectId) {
    selectedProjectId.value = projectId
    currentPage.value = 'project-detail'
    window.location.hash = `project/${projectId}`
  } else if (page === 'work') {
    currentPage.value = 'work'
    selectedProjectId.value = null
    window.location.hash = 'work'
  } else if (page === 'home') {
    currentPage.value = 'home'
    window.location.hash = ''
  } else if (page === 'about') {
    currentPage.value = 'about'
    window.location.hash = 'about'
  } else if (page === 'process') {
    currentPage.value = 'process'
    window.location.hash = 'process'
  } else if (page === 'contact') {
    currentPage.value = 'contact'
    window.location.hash = 'contact'
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function openProjectDetail(id: number) {
  navigate('project-detail', id)
}

function handleHash() {
  const hash = window.location.hash.slice(1)
  if (hash.startsWith('project/')) {
    const id = parseInt(hash.split('/')[1], 10)
    if (id && projects.find((p) => p.id === id)) {
      currentPage.value = 'project-detail'
      selectedProjectId.value = id
      return
    }
  }
  switch (hash) {
    case 'work':
      currentPage.value = 'work'
      break
    case 'about':
      currentPage.value = 'about'
      break
    case 'process':
      currentPage.value = 'process'
      break
    case 'contact':
      currentPage.value = 'contact'
      break
    case '':
      currentPage.value = 'home'
      break
    default:
      currentPage.value = 'home'
      window.location.hash = ''
  }
  selectedProjectId.value = null
}

watch([currentPage, selectedProject], updateDocumentTitle, { immediate: true })

onMounted(() => {
  window.addEventListener('hashchange', handleHash)
  handleHash()
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', handleHash)
})
</script>

<template>
  <div class="text-white antialiased">
    <div class="noise"></div>

    <AppHeader :current-page="currentPage" @navigate="navigate" />

    <main class="pt-28 relative min-h-[calc(100vh-120px)]">
      <Transition name="fade" mode="out-in">
        <HomePage v-if="currentPage === 'home'" key="home" @navigate="navigate" />
        <WorkPage
          v-else-if="currentPage === 'work'"
          key="work"
          :projects="projects"
          @open-project="openProjectDetail"
        />
        <ProjectDetailPage
          v-else-if="currentPage === 'project-detail'"
          key="project-detail"
          :project="selectedProject"
          :projects="projects"
          @navigate="navigate"
          @open-project="openProjectDetail"
        />
        <AboutPage v-else-if="currentPage === 'about'" key="about" />
        <ProcessPage v-else-if="currentPage === 'process'" key="process" />
        <ContactPage v-else-if="currentPage === 'contact'" key="contact" />
      </Transition>
    </main>

    <AppFooter />

    <div ref="glassCursor" class="glass-cursor" aria-hidden="true"></div>
  </div>
</template>
