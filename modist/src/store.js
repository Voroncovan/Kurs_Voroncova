import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
      count: 0,
      user: null,
      currentstyle: ''
    },
    mutations: {
        setCount: (state, count) => state.count = count,
        setUser: (state, user) => state.user = user,
        setCurrentstyle: (state, currentstyle) => state.currentstyle = currentstyle,
    },
    getters: {
        getCount: (state) => 
        { 
            return state.count
        },
        getUser: (state) => 
        { 
            return state.user
        },
        getCurrentstyle: (state) => 
        {     
            return state.currentstyle
        }
    }
  })
  export default store;