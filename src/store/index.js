import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
    },
    getters: {},
    mutations: {
        setUser(state, users) {
            state.users = users
        }
    },
    actions: {
         getUser({commit}) {
           axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res=>{
                commit("setUser",res.data)
                    console.log(res.data)
            })
        },
    },
    modules: {}
})
