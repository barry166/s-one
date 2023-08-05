<template>
  <div class="home-page">
    <div class="content">
      <CardList title="热门推荐" :data="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardList from '@/components/container/card-list/index.vue'
import { data } from './data'
const list = ref(data)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
