<script setup lang="ts">
import { ref } from 'vue'
import type { Page } from '../types'
import { site } from '../data/site'

const props = defineProps<{
  currentPage: Page
}>()

const emit = defineEmits<{
  navigate: [page: Page]
}>()

const mobileMenuOpen = ref(false)

function isActive(page: Page) {
  if (page === 'work') {
    return props.currentPage === 'work' || props.currentPage === 'project-detail'
  }
  return props.currentPage === page
}

function nav(page: Page) {
  mobileMenuOpen.value = false
  emit('navigate', page)
}

function hashFor(page: Page) {
  if (page === 'home') return '#'
  return `#${page}`
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/30"
  >
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <a href="#" @click.prevent="nav('home')" class="text-xl font-semibold tracking-tight">{{
        site.name
      }}</a>

      <nav class="hidden md:flex items-center gap-8 text-sm text-white/60">
        <a
          v-for="item in site.navigation"
          :key="item.page"
          :href="hashFor(item.page)"
          @click.prevent="nav(item.page)"
          class="nav-link transition hover:text-white"
          :class="{ 'nav-link-active': isActive(item.page) }"
          >{{ item.label }}</a
        >
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="#contact"
          @click.prevent="nav('contact')"
          class="hidden sm:inline-flex border border-white/10 hover:border-white/30 transition px-5 py-2 rounded-full text-sm"
          >{{ site.ctaLabel }}</a
        >

        <button
          type="button"
          class="md:hidden border border-white/10 hover:border-white/30 transition px-4 py-2 rounded-full text-sm"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-nav"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          {{ mobileMenuOpen ? 'Close' : 'Menu' }}
        </button>
      </div>
    </div>

    <nav
      v-show="mobileMenuOpen"
      id="mobile-nav"
      class="md:hidden border-t border-white/5 bg-black/90 backdrop-blur-xl"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm text-white/60">
        <a
          v-for="item in site.navigation"
          :key="`mobile-${item.page}`"
          :href="hashFor(item.page)"
          @click.prevent="nav(item.page)"
          class="nav-link transition hover:text-white py-2"
          :class="{ 'nav-link-active': isActive(item.page) }"
          >{{ item.label }}</a
        >
        <a
          href="#contact"
          @click.prevent="nav('contact')"
          class="mt-2 border border-white/10 hover:border-white/30 transition px-5 py-2 rounded-full text-sm text-center"
          >{{ site.ctaLabel }}</a
        >
      </div>
    </nav>
  </header>
</template>
