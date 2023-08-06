import { createStore } from 'vuex'
import user, { UserState } from './user'
import editor, { EditorState } from './editor'

export interface RootState {
  user: UserState
  editor: EditorState
}

const store = createStore({
  modules: {
    user,
    editor
  }
})

export default store
