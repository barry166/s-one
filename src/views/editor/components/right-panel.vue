<template>
  <div class="left-panel">
    <pre>{{ currentElement }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RootState } from '@/store'

const store = useStore<RootState>()
const currentElement = computed(() => store.getters['editor/currentElement'])
</script>

<style></style>
