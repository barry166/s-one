<template>
  <div class="app-container">
    <div class="header">
      <div class="logo"><router-link to="/">Solkatt-one</router-link></div>
      <div class="right">
        <Button type="primary">登录注册</Button>
      </div>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
