import { Module } from 'vuex'
import { RootState } from '..'

export interface UserState {
  data: {}
  token?: string
  isLogin: boolean
}

const user: Module<UserState, RootState> = {
  state: () => ({
    data: {},
    name: 'Solkatt-one',
    isLogin: true,
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    login(state, data) {
      const { token } = data
      state.token = token
      localStorage.setItem('token', token)
    },
    logout(state) {
      state.token = ''
      state.isLogin = false
      localStorage.removeItem('token')
    }
  },
  actions: {}
}

export default user
