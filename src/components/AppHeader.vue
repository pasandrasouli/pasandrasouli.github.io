<script setup>
defineProps({
  currentPage: { type: String, required: true },
})

const emit = defineEmits(['navigate'])

const nav = (page) => emit('navigate', page)
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/30">
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <a href="#" @click.prevent="nav('home')" class="text-xl font-semibold tracking-tight">Pasand Rasouli</a>

      <nav class="hidden md:flex items-center gap-8 text-sm text-white/60">
        <a
          href="#"
          @click.prevent="nav('home')"
          class="nav-link transition hover:text-white"
          :class="{ 'nav-link-active': currentPage === 'home' }"
        >Home</a>
        <a
          href="#"
          @click.prevent="nav('work')"
          class="nav-link transition hover:text-white"
          :class="{ 'nav-link-active': currentPage === 'work' }"
        >Work</a>
        <a
          href="#"
          @click.prevent="nav('about')"
          class="nav-link transition hover:text-white"
          :class="{ 'nav-link-active': currentPage === 'about' }"
        >About</a>
        <a
          href="#"
          @click.prevent="nav('process')"
          class="nav-link transition hover:text-white"
          :class="{ 'nav-link-active': currentPage === 'process' }"
        >Process</a>
        <a
          href="#"
          @click.prevent="nav('contact')"
          class="nav-link transition hover:text-white"
          :class="{ 'nav-link-active': currentPage === 'contact' }"
        >Contact</a>
      </nav>

      <a
        href="#"
        @click.prevent="nav('contact')"
        class="border border-white/10 hover:border-white/30 transition px-5 py-2 rounded-full text-sm"
      >Let's Talk</a>
    </div>
  </header>
</template>
