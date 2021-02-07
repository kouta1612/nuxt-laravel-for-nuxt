import Vue from 'vue'
import Vuex from 'vuex'
import Authentication from '@/store/modules/authentication'
import { $axios } from '~/utils/api'
import { Context } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        Authentication
    },
})

export const actions = {
    async nuxtServerInit (context: Context) {
        await $axios.$get('/api/authenticated-check')
            .then((response) => {
                const AuthModule = getModule(Authentication, store)
                AuthModule.setIsAuthenticated(response.isAuthenticated)
            })
            .catch((error) => {
                const AuthModule = getModule(Authentication, store)
                AuthModule.setIsAuthenticated(false)
                console.log(error)
            })
    },
}
