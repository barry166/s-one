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
      <div class="left"><LeftPanel :components-list="componentsList" /></div>
      <div class="middle">
        <Canvas />
      </div>
      <div class="right"><RightPanel /></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-vue'
import Canvas from './components/canvas.vue'
import LeftPanel from './components/left-panel.vue'
import RightPanel from './components/right-panel.vue'
import { componentsList } from '@/mock/defaultTemplates'
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
