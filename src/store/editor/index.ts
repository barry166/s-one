import { Module } from 'vuex'
import { RootState } from '..'

export interface ComponentData {
  id: string
  isHidden?: boolean
  // 业务组件库名称 l-text，l-image 等等
  name: 'S-text' | 's-image' | 's-shape'
  isLocked?: boolean
  layerName: string
  props: {
    [key: string]: any
  }
}

export interface EditorState {
  components: ComponentData[]
  currentId?: string
}

const editor: Module<EditorState, RootState> = {
  namespaced: true,
  state: () => ({
    components: [],
    currentId: ''
  }),
  mutations: {
    setCurrentId(state, id) {
      state.currentId = id
    },
    addElement(state, element: ComponentData) {
      state.components.push(element)
    },
    updateElement(state, { id, props }) {
      const element = state.components.find(item => item.id === id)
      if (element) {
        element.props = props
      }
    }
  },
  actions: {},
  getters: {
    currentElement(state) {
      if (state.currentId && state.components.length > 0) {
        return state.components.find(item => item.id === state.currentId)
      }
    }
  }
}

export default editor
