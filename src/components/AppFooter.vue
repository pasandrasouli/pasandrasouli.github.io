<script setup lang="ts">
import { BEHANCE_URL, LINKEDIN_URL } from '../constants'
import { site } from '../data/site'
</script>

<template>
  <footer class="border-t border-white/5 py-8 mt-12">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/30">
      <p>© 2026 {{ site.name }}. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a
          :href="LINKEDIN_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-white transition"
        >LinkedIn</a>
        <a
          :href="BEHANCE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-white transition"
        >Behance</a>
      </div>
    </div>
  </footer>
</template>
