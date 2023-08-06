<template>
  <Tabs v-model:activeKey="activeKey" centered>
    <Tabs.TabPane
      v-for="item in Object.keys(componentsList)"
      :key="item"
      :tab="listKeyMap[item]?.label"
    >
      <div v-for="comp in componentsList[item]" class="component-item">
        <div class="component-wrapper">
          <component
            :is="listKeyMap[item]?.renderComponent"
            v-bind="comp"
            @click="itemClick(comp)"
          />
        </div>
      </div>
    </Tabs.TabPane>
  </Tabs>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { Tabs } from 'ant-design-vue'
import { SText } from '@/components/lib'
import store from '@/store'
import { ComponentData } from '@/store/editor'

type KeyMap = {
  [key: string]: {
    label: string
    tag: string
    renderComponent: any
  }
}
interface ComponentList {
  text: any[]
  image: any[]
  [key: string]: any[]
}

const props = defineProps({
  componentsList: {
    type: Object as PropType<ComponentList>,
    required: true
  }
})

console.log(props.componentsList)

const activeKey = ref(Object.keys(props.componentsList)[0])
const listKeyMap: KeyMap = {
  text: {
    label: '文本',
    tag: 's-text',
    renderComponent: SText
  },
  image: {
    label: '图片',
    tag: 's-text',
    renderComponent: SText
  }
}

const itemClick = (element: ComponentData) => {
  const nodeElement = {
    id: uuidv4(),
    name: listKeyMap[activeKey.value].tag,
    props: element
  }
  store.commit('editor/addElement', nodeElement)
}
</script>

<style></style>
