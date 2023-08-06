<template>
  <div class="detail-page">
    <div class="header">
      <div class="title">title</div>
      <div class="action-btn">
        <Space size="middle">
          <Button>预览</Button>
          <Button type="primary">发布</Button>
        </Space>
      </div>
    </div>
    <main class="content">
      <div class="left">left</div>
      <div class="middle">middle</div>
      <div class="right">right</div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-vue'
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
