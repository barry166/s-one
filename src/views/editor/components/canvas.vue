<template>
  <main>
    <div class="canvas" id="canvas-area">
      <div class="body-container">
        <component
          v-for="component in components"
          :is="component.name"
          :key="component.id"
          v-bind="component.props"
          @click="selectComponent(component)"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RootState } from '../../../store/index'
import { ComponentData } from '../../../store/editor/index'
const store = useStore<RootState>()
const components = computed(() => store.state.editor.components)

const selectComponent = (component: ComponentData) => {
  store.commit('editor/setCurrentId', component.id)
}
</script>

<style lang="scss" scoped></style>
