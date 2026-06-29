<script setup>
const emit = defineEmits(['navigate'])

const nav = (page) => emit('navigate', page)
</script>

<template>
  <footer class="border-t border-white/5 py-8 mt-12">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/30">
      <p>© 2026 Pasand Rasouli. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="#" @click.prevent="nav('contact')" class="hover:text-white transition">LinkedIn</a>
        <a href="#" @click.prevent="nav('contact')" class="hover:text-white transition">Behance</a>
      </div>
    </div>
  </footer>
</template>
