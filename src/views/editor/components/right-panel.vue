<template>
  <div class="left-panel">
    <Tabs v-model:activeKey="activeKey" centered>
      <Tabs.TabPane v-for="item in tasOption" :key="item.key" :tab="item.key">
        <component :is="item?.render" v-if="item.render" :props="currentElement?.props || {}" />
        <Empty v-else />
      </Tabs.TabPane>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Tabs, Empty } from 'ant-design-vue'
import { useStore } from 'vuex'
import { RootState } from '@/store'
import PropsTable from './PropsTable'

const store = useStore<RootState>()

const activeKey = ref('属性设置')

const tasOption = reactive([
  {
    key: '属性设置',
    render: PropsTable
  },
  {
    key: '图层设置'
  },
  {
    key: '页面设置'
  }
])
const currentElement = computed(() => store.getters['editor/currentElement'])
console.log(currentElement)
</script>

<style></style>
