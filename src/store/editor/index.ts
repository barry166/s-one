import { Module } from 'vuex'
import { RootState } from '..'

export interface ComponentData {
  id: string
  isHidden?: boolean
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
  state: () => ({
    components: [],
    currentId: ''
  }),
  mutations: {
    setCurrentId(state, id) {
      state.currentId = id
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
